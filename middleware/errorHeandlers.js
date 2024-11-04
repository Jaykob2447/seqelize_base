module.exports.errorHeandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  const massage = err.massage || "Server Error";
  const status = err.status || 500;

  res.status(status).send(massage);
};
