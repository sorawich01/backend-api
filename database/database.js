var admin = require('firebase-admin');
var serviceAccount = require('./my-port-sorawich-firebase-adminsdk-p9a83-eddb99dcd1.json');
const dbModel = require('./getdatabase');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://my-port-sorawich.firebaseio.com',
	// databaseAuthVariableOverride: null
});

var db = admin.database();
var ref = db.ref('about');

const senddatatomodel = async () => {
	const message = await dbModel.getdata(ref);
	console.log('database that get before send to node model :' , message);
	return message;
}

module.exports = {
	senddatatomodel : senddatatomodel,
}
