import { getConnectionOptions, ConnectionOptions } from 'typeorm'
import { Photos } from '@app/models/photos.entity'

const DatabaseOptions = async (): Promise<ConnectionOptions> => {
  const loadedConnectionOptions = await getConnectionOptions()
  const connectionOptions = Object.assign(loadedConnectionOptions, {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Photos],
    synchronize: true,
    logging: false
  })

  return connectionOptions
}

export default DatabaseOptions
