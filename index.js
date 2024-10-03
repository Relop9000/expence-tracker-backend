import express from "express";
import { usersRouter } from "./src/router/users.router";
import { categoryRouter } from "./src/router/category.router";
import { recordRouter } from "./src/router/record.router";

const app = express();

app.use(express.json());

const port = 8000;

app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/record", recordRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
