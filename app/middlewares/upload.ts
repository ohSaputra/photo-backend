import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { album } = req.body
    cb(null, `./albums/${album.toLowerCase()}/`)
  },
  
  filename: (req: any, file: any, cb: any) => {
    cb(null, file.originalname)
  }
})

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedFileType = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
  ]
  
  if (!allowedFileType.find(el => el === file.mimetype)) {
    cb(new Error("Uploaded image is not of type jpg/jpeg/png/gif or webp"), false)
  }
  cb(null, true)
}

export default multer({ storage, fileFilter })