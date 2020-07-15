// connect to model calculator
const modelcalculator = require("../model/calculator.js");

// function + - * /
var controllers = {
    plus: function (req, res) {

        var num1 = req.body.num1;
        var num2 = req.body.num2;
        if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
            var value = modelcalculator.checknumber(num1, num2)
            if (value.StatusCode == 'ERROR') {
                return res.json(value.ErrorDetail)
            }
            num1 = value[0];
            num2 = value[1];
			var result = modelcalculator.plus(num1, num2);
			// console.log(result)
            return res.json(result);

        } else {
			var value = ({ErrorType : 'Syntax wrong' , ErrorDetail : 'parameter or syntax is wrong / for use this function must have number in both field'})
            //console.log("parameter or syntax is wrong")
            return res.json(value.ErrorDetail)
        }
    },
    minus: function (req, res) {
        var num1 = req.body.num1;
        var num2 = req.body.num2;
        if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
            var value = modelcalculator.checknumber(req.body.num1, req.body.num2)
            if (value.StatusCode == 'ERROR') {
                return res.json(value.ErrorDetail)
            }
            num1 = value[0];
            num2 = value[1];
            var result = modelcalculator.minus(num1, num2);
            return res.json(result);
        } else {
            var value = ({ErrorType : 'Syntax wrong' , ErrorDetail : 'parameter or syntax is wrong / for use this function must have number in both field'})
            //console.log("parameter or syntax is wrong")
            return res.json(value.ErrorDetail)
        }
    },
    multi: function (req, res) {
        var num1 = req.body.num1;
        var num2 = req.body.num2;
        if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
            var value = modelcalculator.checknumber(req.body.num1, req.body.num2)
            if (value.StatusCode == 'ERROR') {
                return res.json(value.ErrorDetail)
            }
            num1 = value[0];
            num2 = value[1];
            var result = modelcalculator.multiply(num1, num2);
            return res.json(result);
        } else {
            var value = ({ErrorType : 'Syntax wrong' , ErrorDetail : 'parameter or syntax is wrong / for use this function must have number in both field'})
            //console.log("parameter or syntax is wrong")
			return res.json(value.ErrorDetail)
		}
    },
    divide: function (req, res) {
        var num1 = req.body.num1;
        var num2 = req.body.num2;
        if ((num1 && num2) ||(num1 === 0 && num2) || (num1 && num2 === 0) || (num1 === 0 && num2 ===0)) {
            var value = modelcalculator.checknumber(req.body.num1, req.body.num2)
            if (value.StatusCode == 'ERROR') {
                return res.json(value.ErrorDetail)
            }
            num1 = value[0];
            num2 = value[1];
            var result = modelcalculator.divide(num1, num2);
            return res.json(result);
        } else {
            var value = ({ErrorType : 'Syntax wrong' , ErrorDetail : 'parameter or syntax is wrong / for use this function must have number in both field'})
            //console.log("parameter or syntax is wrong")
			return res.json(value.ErrorDetail)
		}
    },
    about: function (req, res) {
         return res.json({
            about: "This is calculator api",
            function: [{
                functionplus: [{
                    info: "function plus",
                    apiName: "/calculator/plus"
                }],
                functionminus: [{
                    info: "function minus",
                    apiName: "/calculator/minus"
                }],

                functionmultiply: [{
                    info: "function multiply",
                    apiName: "/calculator/multi"
                }],

                functiondivide: [{
                    info: "function divide",
                    apiName: "/calculator/divide"
                }]

            }]
        });
    }
};

// export for anoter page can use the above function
module.exports = controllers;
















/********************************************************************************************

                                    code that not used

********************************************************************************************/


// module.exports = router;






//code calculator below




// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('What function do you what?(add , minus , multiply , divide) :', (func) => {
//     func = func.toLowerCase()
//     if (!(func === 'add' || func === 'minus' || func === 'multiply' || func === 'divide' || func === 'all')) {
//         console.log(`${func} is wrong parameter`)
//         rl.close();
//     } else {
//         rl.question('a : ', a => {
//             rl.question('b : ', b => {
//                 if (isNaN(a) || isNaN(b)) {
//                     console.log(a, ' or ', b, 'is not a number')
//                 }
//                 //console.log(`function is ${func} / a = ${a} / b = ${b}`)
//                 else if (func === 'add') {
//                     var aaa = modelcalculator.add(a, b)
//                 } else if (func === 'minus') {
//                     modelcalculator.minus(a, b)
//                 } else if (func === 'multiply') {
//                     modelcalculator.multiply(a, b)
//                 } else if (func === 'divide') {
//                     modelcalculator.divide(a, b)
//                 } else if (func === 'all') {
//                     modelcalculator.add(a, b)
//                     modelcalculator.minus(a, b)
//                     modelcalculator.multiply(a, b)
//                     modelcalculator.divide(a, b)
//                 }
//                 rl.close();
//                 console.log("test function add ", aaa)
//             })

//         })
//     }
// })


// module.export = {
//     writefile : writefile
// }




// module.exports = {
//     index: (req, res) => {
//         console.log("User Index");
//     },
//     getUser: (req, res) => {
//         console.log("User by id " + req.params.id);
//     }
// }

// module.exports = {
//     add: (req, res) => {
//         console.log("test");
//     }
// }