import multer from 'multer'

interface IAlbum {
  album: string
}

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { album }: IAlbum = req.body
    cb(null, `./albums/${album.toLowerCase()}/`)
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname)
  }
})

const fileFilter = (req: any, file: Express.Multer.File, cb: any): any => {
  const { album }: IAlbum = req.body
  const allowedFileType = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
  ]
  let error = null
  if (album === '' || album === null) {
    error = new Error('Album not allowed to be empty.')
    return cb(error)
  }
  if (allowedFileType.find(el => el === file.mimetype) === undefined) {
    error = new Error(`${file.originalname} is not of type jpg/jpeg/png/gif or webp`)
    return cb(error)
  }
  cb(null, true)
}

export default multer({ storage: multerDiskStorage, fileFilter })
