// Not Found handler
// For handling random wrong request

const notFoundHandler = (_req, _res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
};

// Global Error Handling..

 // response will be the status code & message if any status code and messages are provided by developer otherwise that will be server error and we will provide mannually 500 and any error message

const errorHandler = (error, _req, res, _next) => {
  if (error.status) {
   
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({ message: "Something went wrong!" });
};


module.exports = {
  notFoundHandler,
  errorHandler,
};
