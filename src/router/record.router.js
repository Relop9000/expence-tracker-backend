import express from "express";
import { recordGet } from "../../controller/record/get";
import { recordPost } from "../../controller/record/post";
import { recordDelete } from "../../controller/record/delete";

export const recordRouter = express.Router();

recordRouter
  .get("/", recordGet)
  .post("/", recordPost)
  .delete("/", recordDelete);
