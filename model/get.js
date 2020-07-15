const data = require('../database/database');

const getdatamodel = async () => {
	var bbb = await data.senddatatomodel();
	return bbb;
}

module.exports = {
	getdatamodel : getdatamodel,
}