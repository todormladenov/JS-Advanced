function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let parameters = JSON.parse(input);

    let result = parameters.map(x => {
        return {area: area.call(x), vol: vol.call(x)};
    })

    return result
}
solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)
