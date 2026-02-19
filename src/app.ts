import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/users", async (request, response) => {
  const { name, email } = request.body;

  const user = await prisma.user.create({
    data: { name, email }
  });

  response.status(201).json(user);
});

app.get("/users", async (request, response) => {
  const users = await prisma.user.findMany();
  response.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})