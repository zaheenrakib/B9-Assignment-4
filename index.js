/*--------------------------------------------------------------------------*/
/*
function calculateMoney(ticketSale) {
    if (ticketSale < 0){
       return "Invaild Number";
    }
    const totalEarn = ticketSale * 120;
    const totalCost = (8 * 50) + 500;
    const calculate = totalEarn - totalCost;
    return calculate; 
    
}

const ticket = calculateMoney(10);
console.log(ticket);
*/
/*-----------------------------------------------------------------------------*/



/*------------------------------------------------------------------------------*/

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

/*-------------------------------------------------------------------------------*/

///Here is one Bug like NaN is always active it not remove

// function deleteInvalids(array) {
//     if(!Array.isArray(array)){
//         return "Invalid Array";
//     }
//     var array_2 = [];
//     for (var i = 0, length = array.length; i < length; i++) {
//         if(typeof array[i] == "number"){
//             array_2.push(array[i]);
//         }

//     }
//     return array_2;
// }
// console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(1));



/******************************************************************************************************* */
// 4
// ----------------------------------------Here is Some problem ------------------------------------------
//-----------------------------------------Birtday validation is not working---------------------
/*
function password(obj) {
   if(obj.hasOwnProperty("name") && obj.hasOwnProperty("birthYear") && obj.hasOwnProperty("siteName") == false){
    return "invalid"
   }
   const birth = Object.values(obj.birthYear);
   console.log(birth);
   if(birth <= 4){
    console.log("bit big");
   }
   
    // let str = obj.siteName;
    // let name = str.charAt(0).toUpperCase() + str.slice(1);
    // return name + "#" + obj.name + "@" + obj.birthYear;
}

const obj = { name: "kolimuddin" , birthYear: 1994 , siteName: "google" }
console.log(password(obj));*/
// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google"}));
// console.log(password({ name: "rahat" , birthYear: 202, siteName: "Facebook" }));




/*--------------------------------------------------------five -------------------------------------------*/


// function monthlySavings(arr , livingCost) {
//     if (!Array.isArray(arr)){
//         console.log("Invalid Input");
//     }
//     if(typeof livingCost !== "number"){
//         return "Invalid Input";
//     }
    

// }
// console.log(monthlySavings([89],45));