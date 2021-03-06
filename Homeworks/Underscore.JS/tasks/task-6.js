/* 
 Create a function that:
 *   **Takes** a collection of books
 *   Each book has propeties `title` and `author`
 **  `author` is an object that has properties `firstName` and `lastName`
 *   **finds** the most popular author (the author with biggest number of books)
 *   **prints** the author to the console
 *	if there is more than one author print them all sorted in ascending order by fullname
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (books) {
        //var sortedAuthors = _
        //    .chain(books)
        //    .sortBy(function (book) {
        //        return book.author.firstName + ' ' + book.author.lastName;
        //    })
        //    .countBy(function (book) {
        //        return book.author.firstName + ' ' + book.author.lastName;
        //    })
        //    .value();
        //
        //var maxBooksCount = _.max(sortedAuthors, function (value) {
        //    return value;
        //});
        //
        //_.each(sortedAuthors, function (value, key) {
        //    if (value === maxBooksCount) {
        //        console.log(key);
        //    }
        //});
        _.chain(books)
            .sortBy(function (book) {
                return book.author.firstName + ' ' + book.author.lastName;
            })
            .countBy(function (book) {
                return book.author.firstName + ' ' + book.author.lastName;
            })
            .reduce(function (memo, value, key) {
                if (!memo) {
                    memo = value;
                    console.log(key);
                } else if (memo === value) {
                    console.log(key);
                }

                return memo;
            }, undefined);
    };
}

module.exports = solve;