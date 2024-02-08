// First Completed
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invaild Number";
    }
    const totalEarn = ticketSale * 120;
    const totalCost = (8 * 50) + 500;
    const calculate = totalEarn - totalCost;
    return calculate;

}
// End First/*-----------------------------------------------------------------------------*/

// Start Second
/*

function checkName(name) {
    if(typeof name !== 'string'){
        return "Invalid";
    }
    for ( let i = 0; i < name.length;i++){
        if(name.slice(-1) === "A" || name.slice(-1) === "a" || name.slice(-1) === "Y" || name.slice(-1) === "y" || name.slice(-1) === "I" || name.slice(-1) === "i" || name.slice(-1) === "E" || name.slice(-1) === "e" || name.slice(-1) === "O" || name.slice(-1) === "o" || name.slice(-1) === "U" || name.slice(-1) === "u" || name.slice(-1) === "W" || name.slice(-1) === "w"){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
}
*/
//End Second /*-------------------------------------------------------------------------------*/

// start Third
/*
function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array";
    }
    var array_2 = [];
    for (var i = 0, length = array.length; i < length; i++) {
        if(typeof array[i] === "number" && !isNaN(array[i])){
            array_2.push(array[i]);
        }
    }
    return array_2;
}
*/

//End third /******************************************************************************************************* */

/*
function password(obj) {
    if (obj.hasOwnProperty("name") && obj.hasOwnProperty("birthYear") && obj.hasOwnProperty("siteName") == false) {
        return "Invalid";
    }

    if (typeof obj.birthYear !== 'number' || String(obj.birthYear).length !== 4) {
        return "Invalid";
    }

    let str = obj.siteName;
    let name = str.charAt(0).toUpperCase() + str.slice(1);
    return name + "#" + obj.name + "@" + obj.birthYear;
}
*/

/*--------------------------------------------------------five -------------------------------------------*/


function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr)) {
        console.log("Invalid Input");
    }
    if (typeof livingCost !== "number") {
        return "Invalid Input";
    }

    let totalEarn = 0;
    for (let disCount of arr) {
        if (disCount >= 3000) {
            const totalDis = (20 * disCount) / 100;
            totalEarn = totalEarn + (disCount - totalDis);
        } else {
            totalEarn = totalEarn + disCount;
        }
    }

    const savings = totalEarn - livingCost;
    if (savings >= 0) {
        return `Total Savings: ${savings}`;
    } else {
        return "Earn More";
    }
    

}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 54000));


