class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }


  const handleError = (err, res) => {
    const { statusCode, message } = err;
    console.log("Something broke")
    //console.log(err)
    // if(err.statusCode == 400){
      res.status(500).send('Something broke!')
    // }
    
    // res.status(statusCode).json({
    //   status: "error",
    //   statusCode,
    //   message
    // });
  };

  module.exports = {
    ErrorHandler,
    handleError
  }