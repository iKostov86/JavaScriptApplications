(function () {
    // check if running on Node.js
    if (typeof require !== 'undefined') {
        // load underscore if on Node.js
        _ = require('bower_components/underscore/underscore.js');
    }

    var Person = Object.create({
        init: function (fname, lname, age) {
            this.fname = fname;
            this.lname = lname;
            this.age = age;

            return this;
        },
        toString: function () {
            return this.fname + ' ' + this.lname;
        }
    });

    var people = [
        Object.create(Person).init('Ivaylo', 'Kostov', 18),
        Object.create(Person).init('Ivaylo', 'Kostov', 29),
        Object.create(Person).init('Ivaylo', 'Kostov', 16),
    ];

    //_.chain(people)
    //    .each(function (person, index) {
    //        console.log(person.toString());
    //        console.log(person.age);
    //    });

    //_.chain(people)
    //    .reject(function (person) {
    //        return person.age < 18;
    //    })
    //    .map(function (person) {
    //        return (person.toString() + ' can use alchohol');
    //    })
    //    .each(function (str) {
    //        console.log(str);
    //    });

    //_.chain(people)
    //    .where({ age: 18 })
    //    .map(function (person) {
    //        return (person.toString() + " can't use alchohol");
    //    })
    //    .each(function (str) {
    //        console.log(str);
    //    });

    //var pluckOut = _.chain(people).pluck('fname').value();
    //console.log(pluckOut);
    //console.log('---');

    //var mapOut = _
    //    .chain(people)
    //    .map(function (person) {
    //        return person.lname;
    //    })
    //    .value();

    //console.log(mapOut);
    //console.log('---');

    //_.chain(people)
    //    .sortBy(function (person) {
    //        return person.age;
    //    })
    //    .each(function (person) {
    //        console.log(person.toString() + ' ' + person.age);
    //    });

    //_.chain(people)
    //.sortBy(function (person) {
    //    return -1 * person.age;
    //})
    //.each(function (person) {
    //    console.log(person.toString() + ' ' + person.age);
    //});

    _.chain(people)
        .groupBy(function (person) {
            return person.age >= 18;
        })
        .each(function (group) {
            console.log(group);
        });
})();