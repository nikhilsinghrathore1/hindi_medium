import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";

export const empRouter = new Hono<{
               Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
               Variables:{
                              authid:number
               }           
    
}>()

empRouter.post("/newEmp",async (c)=>{
               const body =await c.req.json()
               const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                            }).$extends(withAccelerate());
                            console.log(body)

               try{
                              const newEmp = await prisma.wipro_emp.create({
                                             data:{
                                                            EmpName:body.name,
                                                            Salary:body.salary,
                                                            JoiningYear:body.year,
                                                            DeptId:body.DeptId
                                             }
                              })
                              c.status(200)
                              return c.json({newEmp})
               }
               catch(e){
                              console.log(e,"the error is this")
                              c.status(400)
                              return c.json({msg:"something went wrong"})
               }
})

empRouter.get("/fetch",async(c)=>{
               const body = await c.req.json()
               const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                            }).$extends(withAccelerate());
                            console.log(body)
               try{
                              const emp = await prisma.wipro_emp.findMany({
                                             where:{
                                                            EmpID:{
                                                                           gte:1,
                                                                           lte:3,
                                                            }
                                             }
                              })

                              c.status(200)
                              return c.json({emp})
               }
               catch(e){
                              console.log(e,"this is the error ")

                              c.status(400)
                              return c.json({msg:"somethign went wrong"})
               }
})


empRouter.get("/fetchName",async(c)=>{
               const body = await c.req.json()
               const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                            }).$extends(withAccelerate());
                            console.log(body)
               try{
                              const emp = await prisma.wipro_emp.findMany({
                                             where:{
                                                           
                                                            OR:[
                                                                           {
                                                                                          EmpName:{
                                                                                                         startsWith:"N"
                                                                                          }
                                                                           },
                                                                           {
                                                                                          EmpName:{
                                                                                                         startsWith:"A"
                                                                                          }
                                                                           }
                                                            ]
                                             }
                              })

                              c.status(200)
                              return c.json({emp})
               }
               catch(e){
                              console.log(e,"this is the error ")

                              c.status(400)
                              return c.json({msg:"somethign went wrong"})
               }
})