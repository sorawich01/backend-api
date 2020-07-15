// var admin = require("firebase-admin");
// var serviceAccount = require("./my-port-sorawich-firebase-adminsdk-p9a83-eddb99dcd1.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// 	databaseURL: "https://my-port-sorawich.firebaseio.com",
// 	databaseAuthVariableOverride: null
// });

// var db = admin.database();
// var ref = db.ref("about");

// const info = () => {
// 	ref.once("value", function (snapshot) {
// 		console.log('snapshot : ', snapshot.val());
// 		var snpppp = snapshot.val();
// 		return snpppp;
// 	}, function (errorObject) {
// 		console.log("The read failed: " + errorObject.code);
// 	});
// }

// module.export = {
// 	info: info
// }












// var usersRef = ref.child("my_information")
// usersRef.set({
// 	full_name: "Sorawich Thamtarakul",
// 	nick_name : "Hue",
// 	date_of_birth: {
// 		date : "18",
// 		month : "Febuary",
// 		year : "1999",
// 	}
// })

// var myinfomation = ref.once("value")
// 	.then(function(snapshot){
// 		console.log(snapshot.child("my_information").val());
// 		return snapshot.child("my_information").val();
// 	}
// );
