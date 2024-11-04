const { Router } = require("express");

const phoneRouter = Router();

phoneRouter
  .route("/")
  .get((req, res, next) => {})
  .patch(() => {});
phoneRouter
  .route("/:idPhone")
  .get((req, res, next) => {})
  .patch(() => {})
  .delete(() => {});
module.exports = phoneRouter;
