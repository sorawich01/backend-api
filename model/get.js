const data = require('../database/database-mock');

const getdatamodel = async () => {
	var bbb = await data.senddatatomodel();
	// console.log('bbbbbb',bbb);
	return bbb;
}

module.exports = {
	getdatamodel : getdatamodel,
}