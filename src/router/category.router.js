import express from "express";
import { categoryPost } from "../../controller/category/post";
import { categoryGet } from "../../controller/category/get";
import { categoryDelete } from "../../controller/category/delete";

export const categoryRouter = express.Router();

categoryRouter.get("/", categoryGet).post("/", categoryPost).delete("/", categoryDelete);
