import fs from 'fs'
import PhotoService from '@services/photo-service'
import { capitalFirst } from '@middlewares/string'

const albums = [
  'food',
  'nature',
  'other',
  'personal',
  'travel'
]

/**
 * PhotoGenerator
 * - this function will generate data from static albums from root
 * - PhotoService here will be used to store generated data into db
 */
export default async (): Promise<void> => {
  for (const albumName of albums) {
    const folder = `albums/${albumName}/`
    await fs.readdir(folder, (err, fileList) => {
      if (err != null) {
        throw err
      }
      const capitalAlbum = capitalFirst(albumName)
      for (const file of fileList) {
        PhotoService.create({
          name: file,
          path: `/albums/${capitalAlbum}/${file}`,
          raw: `/photos/${albumName}/${file}`,
          album: capitalAlbum,
          createdAt: new Date()
        }).catch(e => { throw new Error(e) })
      }
    })
  }
}
