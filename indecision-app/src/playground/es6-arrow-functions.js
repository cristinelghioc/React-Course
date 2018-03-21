
const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1));

const user = {
    name: 'Andrew',
    cities: ['Bv', 'Buc', 'Is'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlaceLived());

const multipliers = {
    numbers: [55, 3434, 54, 644, 1, 403],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multipliers.multiply());
