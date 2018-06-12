import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {


});

// Object Spread Operator

// let user = {
// 	name: 'Abhi',
// 	loc: 'Vadodara'
// }
// let person = {
// 	...user,
// 	age: 25
// }
// console.log(person)

// Object Property Shorthand

// let bike = "Scott";
// let stuff = {
// 	bike,
// 	helmet: true,
// }
// console.log(stuff)

// let house = {
// 	bedroom: 2,
// 	bathroom: 1.5
// }
// let yearBuilt = 1995;
// let foo = {
// 	...house,
// 	yearBuilt,
// 	bedroom: 3,
// 	flooring: 'Carpet'
// }
// console.log(foo)
	// class Person{
	// 	constructor(name = "Anonymous", age = 0){
	// 		this.name = name;
	// 		this.age = age;
	// 	}
	// 	getPersonDescription(){
	// 		return `This person's name is ${this.name} and his age is ${this.age}`;
	// 	}
	// }

	// class Programmer extends Person{
	// 	constructor(name, age, title = 'Assembly'){
	// 		super(name, age);
	// 		this.title = title;
	// 	}
	// 	getPersonDescription(){
	// 		return `This person's name is ${this.name} aged ${this.age} and loves ${this.title}.`;			
	// 	}
	// 	hasJob(){
	// 		return !!this.title; // Returns boolean set or not.
	// 	}
	// }