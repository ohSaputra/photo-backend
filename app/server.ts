/* eslint-disable import/first */
import dotenv from 'dotenv'
import app from './app'
import logger from './logger'

dotenv.config()
const port: string = app.get('port')

app.listen(port, (): void => {
  console.log('\x1b[36m%s\x1b[0m',
    `Express server started at http://localhost:${port}`)
  if (process.env.NODE_ENV === 'development') {
    console.log('\x1b[36m%s\x1b[0m',
      `Swagger UI hosted at http://localhost:${port}/dev/api-docs`)
  }
})

// Close any services, when receiving SIGINT
process.on('SIGINT', () => {
  logger.info('Gracefully shutting down')
  process.exit(0)
})
