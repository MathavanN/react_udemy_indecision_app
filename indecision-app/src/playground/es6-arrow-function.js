const square = function(x){
    return x*x;
};

//const squareArrow = (x) => {
//    return x*x;
//};

const squareArrow = (x) => x * x;

console.log(square(5));
console.log(squareArrow(7));

const fullName = "Naganathan Mathavan";
const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName(fullName));



//argument object - no longer bound with arrow function
const add = function(a,b) {
    console.log(arguments);
    return a + b;
}
const add1 = (a,b) => {
    //console.log(arguments);
    return a+b;
}
console.log(add(5,6,100));
console.log(add1(5,63,100));
//ths keyword - no longer bound

const user = {
    name: "Mathavan",
    cities: ['Hougang', 'Ang Mo Kio', 'Jurong East'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const that = this;
        this.cities.forEach(function(city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
}
const user1 = {
    name: "Mathavan",
    cities: ['Hougang', 'Ang Mo Kio', 'Jurong East'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
}
//user.printPlacesLived();
console.log(user1.printPlacesLived());

const multiplier = {
    numbers:[2,3,4,5,6],
    mulitplyBy : 4,
    multiply() {
        return this.numbers.map((number) => number * this.mulitplyBy); 
    }
};

console.log(multiplier.multiply());