import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";

export const Manager_Router = new Hono<{
                              Bindings: {
                                             DATABASE_URL: string,
                                             JWT_SECRET: string,
                              },
                              Variables:{
                                             authid:number
                              }           
}>(); 

Manager_Router.post("/createManager" , async (c)=>{
               const body = await c.req.json()
               const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                            }).$extends(withAccelerate());
                            console.log(body)
               try{
                              const res = await prisma.emp_manager.create({
                                             data:{
                                                            Emp_name:body.name,
                                                            Manager_id:body.id
                                             }
                              })
                              c.status(200)
                              return c.json(res)
               }              

               catch(e){
                              c.status(400); 
                              return c.json({msg:"something went wrong"})
               }
})