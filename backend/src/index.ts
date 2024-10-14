import { Hono } from 'hono'
import { blog } from './routes/blog';
import {userRouter} from "./routes/userRouter"
import { cors } from 'hono/cors'
import { empRouter } from './routes/empRouter';



             

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();



app.use(cors());

// Allow CORS for specific routes with detailed options
app.use(
  '/*',
  cors({
    origin: '*', // Allow all origins
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
);

app.route("/api/v1/blog",blog)
app.route("/api/v1/user",userRouter)
app.route("api/v1/emp",empRouter)


export default app
