import express, { Request, Response } from "express";
const app = express();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
  await prisma.user.create({
    data: {
      name: "dead",
      email: "dead@gmail.com",
      password: "123456",
    },
  });
  console.log("user created!!!");
});

app.listen(6000, () => {
  console.log("Server listening on port 6k");
});
