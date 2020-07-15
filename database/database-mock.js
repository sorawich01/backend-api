const senddatatomodel = async () => {
	const message = 'database-mock'
	console.log('database that get before send to node model :' , message);
	return message;
}

module.exports = {
	senddatatomodel : senddatatomodel,
}

