import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json()); // ver se tem um corpo em formato json na requisição
app.use(routes);

app.listen(3333, () => {
  console.log("Up and Running");
});
