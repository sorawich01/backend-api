const express = require('express'); //import
const cors = require('cors');
const bodyParser = require('body-parser'); //import
const app = express();
const PORT = process.env.PORT || 8081

var admin = require("firebase-admin");
var serviceAccount = require("./database/my-port-sorawich-firebase-adminsdk-p9a83-eddb99dcd1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://my-port-sorawich.firebaseio.com",
	// databaseAuthVariableOverride: null
});

var db = admin.database();
var ref = db.ref("about");
ref.once("value", function (snapshot) {
	console.log('snapshot : ', snapshot.val());
	var snapsnap = snapshot.val();
	app.get("/myinformation", (req, res) => {
		console.log(snapsnap);
		res.send(snapsnap);
})
}, function (errorObject) {
	console.log("The read failed: " + errorObject.code);
});







const {handleError, ErrorHandler } = require('./model/error.js')

// parse application/json    can use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//enable cross origin resourse sharing
app.use(cors())

// for show error about data json
app.use((err, req, res, next) => {
  handleError(err, res);
});


const routes = require('./routes');
routes(app);


// create server at port 3000
var server= app.listen(PORT,function() {
    console.log('App listening on port ' + PORT);
});

module.exports = server;




























/********************************************************************************************

                                    code that not used

********************************************************************************************/

// app.get("/", (req , res) =>{
//     return res.send('index pages', req , res)
//    })



// router.listen(PORT, () =>
//   console.log(`Example app listening on port ${process.env.PORT}!`),
// );

// app.use(calculatorroutes())



// app.get('/', (req, res) => res.send('start'))

// // app.listen(PORT, () => {
// //     console.log(`Server is running on PORT : ${PORT}`)
// // })

// module.exports = routes;