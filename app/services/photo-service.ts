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

  /**
   * create a photo
   * @param {Object} params - Photo properties
   * @returns {Promise} Promise
   */
  async create ({ name, path, raw, album, createdAt }: IPhotos) {
    const repository = PhotoService.photoRepository()
    return await repository.insert({
      id: uuidv1(),
      name,
      raw,
      path,
      album,
      createdAt
    })
  },

  /**
   * list photo
   * @param {number} skip
   * @param {number} limit
   * @returns {Promise} Promise of Photos + Count
   */
  async list ({ skip, limit }: iList) {
    const repository = PhotoService.photoRepository()
    return await repository
      .createQueryBuilder('photos')
      .offset(skip)
      .limit(limit)
      .orderBy('createdAt')
      .getManyAndCount()
  },

  /**
   * find one photo
   * @param {string} album
   * @param {string} name
   * @returns {Promise} Promise of found photo
   */
  async findOne ({ album, name }: iFind) {
    const repository = PhotoService.photoRepository()
    return await repository.findOne({ album, name })
  },

  /**
   * remove a photo
   * @param {string} album
   * @param {string} name
   */
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

  /**
   * clear table photo
   */
  async flush () {
    const repository = PhotoService.photoRepository()
    await repository.clear()
  }
}

export default PhotoService
