import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, jwt, sign, verify } from 'hono/jwt'
import { CreatePostval } from '@nikochan256/medium_common'
import { updatePostval } from '@nikochan256/medium_common'

           
export const blog = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
               Variables:{
                              authid:number
               }           
    
}>();


blog.use("/*", async (c, next) => {
               const authtoken = c.req.header("authorization") || "";
               console.log(authtoken)
               const user = await verify(authtoken, c.env.JWT_SECRET); 
               console.log(user)
               const userid = Number(user.id);
               if(user){
                              c.set("authid" , userid);
                              await next()
               }
               else{
                              return c.text("you are not authorized")
               }

           });

blog.post("/createPost",async(c)=>{
               const body =await c.req.json()
               const user = c.get("authid");
               console.log(user)
               try{
                const {success} = CreatePostval.safeParse(body);
                if(!success){
                    c.status(400)
                    return c.json({msg:"wrongs inputs"})
                }
                              const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                              }).$extends(withAccelerate());

                              console.log("fine till here")
                              const post = await prisma.blog.create({
                                             data:{
                                                            title:body.title,
                                                            content:body.content,
                                                            thumbnail:body.thumbnail,
                                                            authorId:user
                                             }
                              })

                              return c.json(post)

               }
               catch(e){
                              c.status(400)
                              return c.text("some error ocurred")
               }
})
             
blog.put("/updateBlog", async (c)=>{
               const body =await c.req.json()
               const user = c.get("authid");
               try{

                const {success} = updatePostval.safeParse(body);
                if(!success){
                    c.status(400);
                   return c.json({msg:"wrong inputs"})
                }
                              const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                              }).$extends(withAccelerate());

                              const post = await prisma.blog.update({
                                             where:{
                                                           id:body.id,
                                                           authorId:user
                                             },
                                             data:{
                                                            title:body.title,
                                                            content: body.content,
                                                            published:body.published,
                                             }
                              })

                              return c.json(post)

               }
               catch(e){
                              c.status(400)
                              return c.text("some error ocurred")
               }

})
             
blog.get("/getBlog/:id" , async (c)=>{
               const blog_id = await c.req.param("id")
               const bId = Number(blog_id)

               try{
                              const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                              }).$extends(withAccelerate());

                              const post = await prisma.blog.findUnique({
                                             where:{
                                                           id:bId
                                             }
                              })

                              return c.json(post)

               }
               catch(e){
                              c.status(400)
                              return c.text("some error ocurred")
               }
})
             
blog.get("/getAllBlog" ,async (c)=>{
          
               try{
                              const prisma = new PrismaClient({
                              datasourceUrl: c.env.DATABASE_URL,
                              }).$extends(withAccelerate());

                              const post = await prisma.blog.findMany({})

                              return c.json(post)

               }
               catch(e){
                              c.status(400)
                              return c.text("some error ocurred")
               }
})


// now most of the functionalities are done only have to deploy this shizzzz

// protocols 

// 1. inner join : return the common data only ; 
// 2.left outer join : left table data + common data ; 
// 3.right outer join : right table data + common data ; 
// 4.full outer join : left + right + common 
// 5.left exclusive : left table data - common data ; 
// 6.right exclusive : right table data - common data ; 
