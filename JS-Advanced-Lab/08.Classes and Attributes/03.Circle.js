class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius
    }

    set diameter(diameter) {
        this._radius = diameter / 2;
    }

    get diameter() {
        return this._radius * 2;
    }

    get area() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
let c = new Circle(2);
console.log(c);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);