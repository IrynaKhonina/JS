// Sales Departments Task
// There are two sales departments - Dept 1 and Dept 2.
// You need to estimate quarter sales.
//     To do this, you need to calculate the average sales per month in quarter for each department.
//
// 1.	Create an arrow function getAverage to calculate the average sales per month in quarter.
// 2.	Use the getAverage function to calculate the average for each department.
// 3.	Create a function printBonus that takes the average sales of each department as parameters: printBonus(dept1AverSales, dept2AverSales). If sales of one department  are at least 30% higher than sales of another one, the function should calculate a bonus for the winner in percentage of that difference and log this to the console. For instance, if Dept 1 has 35% more sales, the function should log the following to the console: ‘Dept 1 will get a bonus of 35%’.
// 4.	Use the printBonus function with two data sets below.
//
//
//     The first quarter
// January	February	March
// Dept 1	35467	29842	38501
// Dept 2	70533	50121	33899
//
// The second quarter
// April	May	June
// Dept 1	50301	21984	19207
// Dept 2	72381	41562	29465
//
//
//
// If a > b
// c = a - b
// p = c / b * 100


const getAverage = (x, y, z) => (x + y + z) / 3;

const dept1AverSales1 = getAverage(35467, 29842, 38501);
const dept2AverSales1 = getAverage(70533, 50121, 33899);

const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);

const printBonus = function (dept1AverSales, dept2AverSales) {
    if (dept1AverSales > dept2AverSales) {
        const diff = dept1AverSales - dept2AverSales;
        const percent = diff / dept2AverSales * 100;
        if (percent >= 30) {
            console.log(`Dept 1 will get a bonus of ${percent.toFixed(2)}%`);
        } else {
            console.log('No bonus in this quarter');
        }
    } else if (dept2AverSales > dept1AverSales) {
        const diff = dept2AverSales - dept1AverSales;
        const percent = diff / dept1AverSales * 100;
        if (percent >= 30) {
            console.log(`Dept 2 will get a bonus of ${percent.toFixed(2)}%`);
        } else {
            console.log('No bonus in this quarter');
        }
    } else {
        console.log('No bonus in this quarter');
    }
};

printBonus(dept1AverSales1, dept2AverSales1);
printBonus(dept1AverSales2, dept2AverSales2);