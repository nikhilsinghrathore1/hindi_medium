import { Hono } from 'hono'
import { blog } from './routes/blog';
import {userRouter} from "./routes/userRouter"

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();
app.route("/api/v1/blog",blog)
app.route("/api/v1/user",userRouter)


export default app
