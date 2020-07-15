const getdata = async (ref) => {
  const message = await ref.once('value');
	// console.log(message);
	const messageval = message.val();
	// console.log(messageval);
	return messageval;
};

module.exports = {
  getdata: getdata,
};





