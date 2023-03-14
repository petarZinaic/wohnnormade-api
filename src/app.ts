import { config } from "dotenv";
import epxress, { NextFunction, Request, Response } from "express";

config();

const app = epxress();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Server started")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});