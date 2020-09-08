import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import { corsOptions } from '@lib/cors'
import errorHandler from '@errors/handler'
import { env } from '@app/env'
import {
  health,
  photo,
  swagger
} from '@app/start/routes'

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Assign routes
app.use(health)
app.use(photo)
if (env.isDevelopment) {
  app.use(swagger)
}

app.use(errorHandler)

export default app
