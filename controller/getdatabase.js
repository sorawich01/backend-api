const modelgetdatabase = require("../model/getdatabase.js");
// console.log('model get data : ' , modelgetdatabase);
var controllers = {
	getdata : function(req , res){
		var value = modelgetdatabase.getdata();
		// var value = 123;
		console.log('value :', value)
		return res.json(value);
	}
}

module.exports = controllers;

