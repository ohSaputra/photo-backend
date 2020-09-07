import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import routes from '@app/routes'
import errorHandler from '@errors/handler'
import cors from 'cors'

const app = express()
const port = process.env.PORT ?? 8888

app.set('port', port)

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.use(errorHandler)

export default app
