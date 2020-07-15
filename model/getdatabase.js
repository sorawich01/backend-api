var db = require('../database/database.js')

const getdata = () => {

	var dbbb = db.info;
	console.log('dbbb :' , dbbb)

}

module.exports = {
	getdata : getdata
}
