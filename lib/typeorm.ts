import { getConnectionOptions, ConnectionOptions } from 'typeorm'
import { Photos } from '@app/models/photos.entity'
import { env } from '@app/env'

const DatabaseOptions = async (): Promise<ConnectionOptions> => {
  const loadedConnectionOptions = await getConnectionOptions()
  const connectionOptions = Object.assign(loadedConnectionOptions, {
    type: env.db.type,
    host: env.db.host,
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    entities: [Photos],
    synchronize: true,
    logging: false
  })

  return connectionOptions
}

export default DatabaseOptions
