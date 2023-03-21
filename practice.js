class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Bill';

    printName = () => {
        console.log(this.name);
    }
}

const newPerson = new Person();

newPerson.printGender();
newPerson.printName();



let array = [1,2,3,4,5,6]
let arr = [9,8,7,6,5]

//using spread operator - spread array out into its elements
console.log(...array, 1, 2);
console.log(...array, ...arr);


//rest operator - allows for unlimited params, turns them into an array
const arrayArgs = (...args) => {
    console.log(args);
    args.forEach(num => console.log(num));
}

arrayArgs(1);
arrayArgs(1,3,5,6,7);


//copying objects and arrays (they are reference types)
const person = {
    name: 'Max'
};

const secondPerson = person;

const anotherPerson = {
    ...person
}

person.name = 'Billy';

console.log(secondPerson);
console.log(anotherPerson);