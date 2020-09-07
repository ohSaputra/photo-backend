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

export default (): void => {
  for (const albumName of albums) {
    const folder = `albums/${albumName}/`
    fs.readdir(folder, (err, fileList) => {
      if (err != null) {
        throw err
      }
      const capitalAlbum = capitalFirst(albumName)
      for (const file of fileList) {
        PhotoService.create({
          name: file,
          path: `/albums/${capitalAlbum}/${file}`,
          raw: `/photos/${albumName}/${file}`,
          album: capitalAlbum
        }).catch(e => { throw e })
      }
    })
  }
}
