export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};  

// this is the error handler middleware so what we do is we can manually assign the errors if we want to or we can use this function to assign the errors and then pass the error to the next middleware
