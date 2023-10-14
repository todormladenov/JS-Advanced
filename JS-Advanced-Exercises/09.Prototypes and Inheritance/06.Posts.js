function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let result = [`Post: ${this.title}`, `Content: ${this.content}`];

            return result.join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let rating = this.likes - this.dislikes
            let result = [super.toString(), `Rating: ${rating}`];

            if (this.comments.length) {
                result.push('Comments:');
                this.comments.forEach(comment => {
                    result.push(` * ${comment}`);
                });
            }

            return result.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let result = [super.toString(), `Post: ${this.title}`, `Content: ${this.content}`, `Views: ${this.views}`];

            return result.join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }

}
const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let blog = new classes.BlogPost("TestTitle", "TestContent", 25);

console.log(blog);
console.log(blog.view().view().view());
console.log(blog.toString());