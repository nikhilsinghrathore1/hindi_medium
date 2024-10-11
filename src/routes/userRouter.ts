import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, jwt, sign, verify } from "hono/jwt";
import {signInval} from "@nikochan256/medium_common"
import { signupval } from "@nikochan256/medium_common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  console.log(body)

  const { success, error } = signupval.safeParse(body);

  if (!success) {
    // If validation fails, send a 400 status with the error message
    c.status(400);
    return c.json({ msg: "Invalid inputs", error: error.errors });
  }
  console.log(success)
  try {


    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    if (user) {
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json(token);
    } else throw new Error("user creation failed");
  } catch (e) {
    c.status(400);
    return c.text("user was not created ");
  }
});

userRouter.post("/signIn", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const {success} = signInval.safeParse(body)
  if(!success){
    c.status(400)
   return c.json({msg:"invalid inputs"})

  }
  try {

    const user = await prisma.user.findUnique({
      where: {
        username: body.username,
      },
    });

    if (!user) {
      c.status(403);
      return c.text("wrong credentials");
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json(token);
  } catch (e) {
    c.status(405);
    return c.text("some error occured");
  }
});
