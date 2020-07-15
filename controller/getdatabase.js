const  dbModel = require('../model/get');

var controldb = {
	getdata : async function (req, res) {
		var aaa = await dbModel.getdatamodel();
		// console.log('aaaaaaaaaaaaaaa', aaa);
		return res.send(aaa);
	}
}
module.exports = controldb;
