const  dbModel = require('../model/get');

var controldb = {
	getdata : async function (req, res) {
		var aaa = await dbModel.getdatamodel();
		return res.send(aaa);
	}
}
module.exports = controldb;
