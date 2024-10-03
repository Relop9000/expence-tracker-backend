import express from "express";
import { usersPost } from "../../controller/users/post";
import { usersGet } from "../../controller/users/get";
import { usersDelete } from "../../controller/users/delete";

export const usersRouter = express.Router();

usersRouter.get("/", usersGet).post("/", usersPost).delete("/", usersDelete);
