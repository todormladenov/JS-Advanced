function printDeckOfCards(cards) {

    function createCard(face, suit) {

        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',

        }

        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            throw new Error('Error');
        }

        if (face != face.toUpperCase() || suit != suit.toUpperCase()) {
            throw new Error('Error');
        }

        return {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        }


    }

    let result = [];

    for (let card of cards) {
        let tokens = card.split('');
        let face = tokens[0];
        let suit = tokens[1];

        if (tokens.length > 2) {
            face = tokens[0] + tokens[1];
            suit = tokens[2];
        }

        try {
            let currCard = createCard(face, suit).toString();
            result.push(currCard);
        } catch(err) {
            return console.log(`Invalid card: ${card}`);
        }
    }

    console.log(result.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);