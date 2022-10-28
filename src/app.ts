import express from "express";
import todoRoute from "./routes/todoRoute";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

app.use(todoRoute);

app.listen(3000, () => {
  console.log("Server started at port 3k");
});
