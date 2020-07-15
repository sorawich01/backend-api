// controller it like gateway that connect to each api
const calculatorcontroller = require("./controller/calculator.js");
// const getdatacontroller = require("./controller/getdatabase.js");


// HTTP method routes (such as get, post, put )
module.exports = function (app) {
    app.get("/", (req, res) => {
        res.send('Welcome to calculator main route!')
		})
		// app.route('/myinformation')
		// 		.get(getdatacontroller.getdata)
    app.route('/calculator')
        .get(calculatorcontroller.about);
    app.route('/calculator/plus')
        .post(calculatorcontroller.plus);
    app.route('/calculator/minus')
        .post(calculatorcontroller.minus);
    app.route('/calculator/multi')
        .post(calculatorcontroller.multi);
    app.route('/calculator/divide')
        .post(calculatorcontroller.divide);

};






















//  const express = require('express')
//const router = express.Router()
//const app = express()
//  'use strict';
















/********************************************************************************************

                                    code that not used

********************************************************************************************/



// router.use("/calculator/plus", calculatorroutes);

// router.get("/test", (req, res) => {
//     return res.send('Success from routes')
// })

// app.route('/test').get(res.send('Success from routes'));

// module.exports = router;




//   app.put('/', function (req, res) {
//     res.send('Got a PUT request at /user')
//   })

// app.use(calculator())



// app.listen(3000)




// module.export = function (app) {
//     app.post('/calculator/plus', (app) => {
//         calculatorcontroller.plus
//     })
//     app.post('/calculator/minus', (app) => {
//         calculatorcontroller.plus
//     })
//     app.post('/calculator/multi', (app) => {
//         calculatorcontroller.plus
//     })
//     app.post('/calculator/devide', (app) => {
//         calculatorcontroller.plus
//     })
// }