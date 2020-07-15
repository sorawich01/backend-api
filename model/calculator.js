//plus model
const plus = (num1, num2) => {

    if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {           // check have number and number = 0
        try {                                                                                                   // try code and catch err
            var value = checknumber(num1, num2)                                                                 // check num1 and num2 that is a number or not
            if (value.StatusCode == 'ERROR') {                                                                  // if StatusCode = error = num1 num2 or both are not number
                return ({                                                                                       //
                    ErrorType: 'NaN',                                                                           //
                    ErrorDetail: 'num1 and num2 must be a number'                                               //
                })                                                                                              //
            }                                                                                                   //
            var result = value[0] + value[1];                                                                   // find result of summary
            if (result >= 100000000) throw "too high";                                                          // set number that > and < hundred million are Over specified value
            if (result <= -100000000) throw "too low";                                                          //
            return result                                                                                       //
        } catch (err) {                                                                                         //
            return err                                                                                          // recieve err from throw
        }                                                                                                       //
    } else {                                                                                                    //
        return ({                                                                                               // if don't have number return error
            ErrorType: 'Syntax wrong',                                                                          //
            ErrorDetail: "don't have num1 or num2 or both"                                                      //
        });                                                                                                     // end module
    }
}

// minus model
const minus = (num1, num2) => {
    if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
        try {
            var value = checknumber(num1, num2)
            if (value.StatusCode == 'ERROR') {
                return ({
                    ErrorType: 'NaN',
                    ErrorDetail: 'num1 and num2 must be a number'
                })
            }
            var result = value[0] - value[1];                                                                   // find result of minus
            if (result >= 100000000) throw "too high";
            if (result <= -100000000) throw "too low";
            return result
        } catch (err) {
            return err
        }
    } else {
        return ({
            ErrorType: 'Syntax wrong',
            ErrorDetail: "don't have num1 num2 or both"
        });
    }
}

// multiply model
const multiply = (num1, num2) => {
    if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
        try {
            var value = checknumber(num1, num2)
            if (value.StatusCode == 'ERROR') {

                return ({
                    ErrorType: 'NaN',
                    ErrorDetail: 'num1 and num2 must be a number'
                })
            }
            var result = (value[0] * value[1]);                                                                 // find result of multiply
            if (result >= 100000000) throw "too high";
            if (result <= -100000000) throw "too low";
            var result = round(result, 9)                                                                       // Customize the decimal
            return result
        } catch (err) {
            return err
        }
    } else {
        return ({
            ErrorType: 'Syntax wrong',
            ErrorDetail: "don't have num1 or num2 or both"
        });
    }
}

// divide model
const divide = (num1, num2) => {
    if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
        try {
            var value = checknumber(num1, num2)
            if (value.StatusCode == 'ERROR') {
                return ({
                    ErrorType: 'NaN',
                    ErrorDetail: 'num1 and num2 must be a number'
                })
            }
            if (value[1] == 0) throw "Can't division by 0";
            var result = value[0] / value[1];                                                                   // find result of multiply
            if (result >= 100000000){throw "too high";}
            if (result <= -100000000) throw "too low";
            result = round(result, 9)
            return result
        } catch (err) {
            return err
        }
    } else {
        return ({
            ErrorType: 'Syntax wrong',
            ErrorDetail: "don't have num1 or num2 or both"
        });
    }
}



// round function used for trancate the decimal
function round(value, decimals) {
    return Number(Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals));
}

// checknumber function used for check num1 and num2 that is a number or not
const checknumber = (Rnum1, Rnum2) => {

    if (isANumber(Rnum1) && isANumber(Rnum2)) {
        var num1 = parseFloat(Rnum1);
        var num2 = parseFloat(Rnum2);
        return [num1, num2];
    } else {
        //console.log("num1 and num2 must be a number");
        return ({
            StatusCode: 'ERROR',
            NumType: 'NaN',
            ErrorDetail: 'num1 and num2 must be a number'
        });
    }
}

// regex check is number
function isANumber(str) {
    //return !/\D/.test(str);                   //
    // return /^\d*\.?\d+$/.test(str);          //
    return /^-?\d*\.?\d+$/.test(str); //
}

//export to other file
module.exports = {
	plus: plus,
	minus: minus,
	multiply: multiply,
	divide: divide,
	checknumber: checknumber
}























// var sumq = multiply(1123123, 124124)
// console.log(sumq);








// if (isNaN(num1) || isNaN(num2)) {
//     console.log("num1 and num2 must be a number");
//     return false;
// }







/********************************************************************************************

                                    code that not used

********************************************************************************************/



// const plus = (num1, num2) => {
//     try {
//         var result = num1 + num2;
//         if (result >= 100000000) throw "too high";
//         if (result <= -100000000) throw "too low";
//         //console.log('a - b = ', c)
//         return result
//     } catch (err) {
//         //console.log(err);
//         return err
//     }
// }
// const minus = (num1, num2) => {
//     try {
//         var result = num1 - num2;
//         if (result >= 100000000) throw "too high";
//         if (result <= -100000000) throw "too low";
//         //console.log('a - b = ', c)
//         return result
//     } catch (err) {
//         //console.log(err);
//         return err
//     }
// }
// const multiply = (num1, num2) => {
//     try {
//         var result = num1 * num2;
//         if (result >= 100000000) throw "too high";
//         if (result <= -100000000) throw "too low";
//         result = round(result, 9)
//         // console.log('a * b = ', result)

//         return result
//     } catch (err) {
//         //console.log(err);
//         return err
//     }
// }
// const divide = (num1, num2) => {
//     try {
//         if (num2 == 0) throw "Can't division by 0";
//         var result = num1 / num2
//         result = round(c, 9) //Truncate number to 5 decimal
//         if (isNaN(result)) throw "error can't divide"
//         if (result >= 100000000) throw "too high";
//         if (result <= -100000000) throw "too low";
//         // console.log('num1 / num2 = ', result)
//         return result;
//     } catch (err) {
//         //console.log(err);
//         return err
//     }
// }

















// const express = require("express");
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What function do you what?(add , minus , multiply , divide) :' , funresult=> {
//     rl.question('a = ', a => {
//         rl.question('b = ', b => {
//         var result= (+a) + (+b);
//         console.log(`The sum of a and b is : ${c}`);
//         result= (+a) - (+b);
//         console.log(`The minus of a and b is : ${c}`);
//         result= (+a) * (+b);
//         console.log(`The multiply of a and b is : ${c}`);
//         result= (+a) / (+b);
//         console.log(`The divide of a and b is : ${c}`);
//         rl.close();
//         })
//     })
// })

// rl.question('What function do you what?(add , minus , multiply , divide) :' , (func) => {
//     funresult= func.toLowerCase()
//     if(!(funresult=== 'add' || funresult=== 'minus' ||  funresult==='multiply' || funresult=== 'divide' || funresult=== 'all' )){
//         console.log(`${func} is wrong parameter`)
//         rl.close();
//     }else{
// rl.question('a : ', a => {
//     rl.question('b : ', b => {
//         console.log(`function is ${func} / a = ${a} / b = ${b}`)
//             if(funresult=== 'add'){
//                 add(a,b)
//                 //console.log((+a) + (+b))
//             }else if(funresult=== 'minus'){
//                 minus(a,b)
//             }else if(funresult=== 'multiply'){
//                 multiply(a,b)
//             }else if(funresult=== 'divide'){
//                 divide(a,b)
//             }else if(funresult=== 'all'){
//                 add(a,b)
//                 minus(a,b)
//                 multiply(a,b)
//                 divide(a,b)
//             }
//             rl.close();
//             })
//         })
//     }
// })

// const add= (StrA,StrB) => {
// const a = Number(StrA)
// const b = Number(StrB)
// var result= StrA + StrB