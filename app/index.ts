import bodyParser from 'body-parser'
import express from 'express'
import routes from '@app/routes'
import errorHandler from '@errors/handler'
import cors from 'cors'
import { env } from '@app/env'

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

const app = express()

app.set('port', env.app.port)
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.use(errorHandler)

export default app
