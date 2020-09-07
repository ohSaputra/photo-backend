import { v1 as uuidv1 } from 'uuid'
import { unlink } from 'fs'
import { Photos, IPhotos } from '@app/models/photos.entity'
import { getRepository, Repository } from 'typeorm'

interface iList {
  skip: number
  limit: number
}

interface iFind {
  album: string
  name: string
}

const PhotoService = {
  photoRepository (): Repository<Photos> {
    return getRepository(Photos)
  },

  async create ({ name, path, raw, album }: IPhotos) {
    const repository = PhotoService.photoRepository()
    return await repository.insert({
      id: uuidv1(),
      name,
      raw,
      path,
      album
    })
  },

  async list ({ skip, limit }: iList) {
    const repository = PhotoService.photoRepository()
    return await repository
      .createQueryBuilder('photos')
      .skip(skip)
      .limit(limit)
      .getManyAndCount()
  },

  async findOne ({ album, name }: iFind) {
    const repository = PhotoService.photoRepository()
    return await repository.findOne({ album, name })
  },

  async remove ({ album, name }: iFind) {
    const repository = PhotoService.photoRepository()
    await repository.delete({ album, name })
    unlink(`albums/${album.toLowerCase()}/${name}`, err => {
      if (err !== null && err.code === 'ENOENT') {
        console.info(`${name} doesn't exist, won't remove it.`)
      } else {
        console.log(`${name} deleted successfully.`)
      }
    })
  },

  async flush () {
    const repository = PhotoService.photoRepository()
    await repository.clear()
  }
}

export default PhotoService
