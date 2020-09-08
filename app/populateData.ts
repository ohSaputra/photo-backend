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

export default async () => {
  for (const albumName of albums) {
    const folder = `albums/${albumName}/`
    await fs.readdir(folder, async (err, fileList) => {
      if (err != null) {
        throw err
      }
      const capitalAlbum = capitalFirst(albumName)
      for (const file of fileList) {
        await PhotoService.create({
          name: file,
          path: `/albums/${capitalAlbum}/${file}`,
          raw: `/photos/${albumName}/${file}`,
          album: capitalAlbum,
          createdAt: new Date()
        })
      }
    })
  }
}
