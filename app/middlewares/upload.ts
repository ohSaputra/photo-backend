import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { album }: { album: string } = req.body
    cb(null, `./albums/${album.toLowerCase()}/`)
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname)
  }
})

const fileFilter = (req: any, file: Express.Multer.File, cb: any): void => {
  const allowedFileType = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
  ]
  if (allowedFileType.find(el => el === file.mimetype) === undefined) {
    cb(new Error(`${file.originalname} is not of type jpg/jpeg/png/gif or webp'`), false)
  }
  cb(null, true)
}

export default multer({ storage, fileFilter })
