var _ = require('./node_modules/underscore/underscore.js');

var people = [
    {name: 'Ivan Todorov', age: 21, grade: 6},
    {name: 'Georgi Tonev', age: 13, grade: 3},
    {name: 'Pesho Bogdanov', age: 13, grade: 5},
    {name: 'Kiro Peshev', age: 45, grade: 4},
    {name: 'Stefan Lisugerov', age: 45}
];

var numbers = [1, 2, 3, 4, 5];

//var elevenYearsOld = _.chain(people).where({age: 13, grade: 3}).value();
//console.log(elevenYearsOld);
//
//console.log(_.any(numbers, function (number) {
//    return number % 2 === 0;
//}));
//
//console.log(_.pluck(people, 'name'));
//
//var sortedPeople = _.sortBy(people, function (item) {
//    return -item.name;
//});
//console.log(sortedPeople);
//
//console.log(_.groupBy(numbers, function (value, key) {
//    return key;
//}));
//
//console.log(_.first(numbers));
//console.log(_.first(numbers, 1));

var fib1 = function (n) {
    console.log('fib(' + n + ')')
    return n < 2 ? n : fib1(n - 2) + fib1(n - 1);
};

fib1(10);
console.log('-----');

var fib2 = _.memoize(function (n) {
    console.log('fib(' + n + ')')
    return n < 2 ? n : fib2(n - 2) + fib2(n - 1);
});

fib2(10);
console.log('-----');

var func1 = function (x) {
    return x + ' first';
};

var func2 = function (x) {
    return x + ' second';
};

var func3 = function (x) {
    return x + ' third';
};

console.log(func3(func2(func1('zero'))));
console.log(_.compose(func3, func2, func1)('zero'))