import { Request, Response, NextFunction } from 'express'
import ApplicationError from '@errors/application-error'

const handler = (err: ApplicationError, req: Request, res: Response, next: NextFunction): any => {
  if (res.headersSent) {
    return next(err)
  }

  return res.status(err.status ?? 500).json({
    error: process.env.NODE_ENV === 'development' ? err : undefined,
    message: err.message
  })
}

export default handler
