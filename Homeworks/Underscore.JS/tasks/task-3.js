/* 
 Create a function that:
 *   Takes an array of students
 *   Each student has:
 *   `firstName`, `lastName`, `age` and `marks` properties
 *   `marks` is an array of decimal numbers representing the marks
 *   **finds** the student with highest average mark (there will be only one)
 *   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
 *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
 *   **Use underscore.js for all operations**
 */

function solve() {
    return function (students) {
        var averageMark;
        var wantedStudent = _.chain(students)
            .max(function (student) {
                var result = _.chain(student.marks)
                    .reduce(function (mark, init) {
                        return mark + init;
                    }, 0) / (student.marks.length ? student.marks.length : 1);

                if (!averageMark || averageMark < result) {
                    averageMark = result;
                }

                return result;
            }).value();

        console.log(wantedStudent.firstName + ' ' + wantedStudent.lastName + ' has an average score of ' + averageMark);
    };
}

module.exports = solve;
