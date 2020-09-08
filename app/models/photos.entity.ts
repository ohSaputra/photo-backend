import { Column, Entity, PrimaryColumn } from 'typeorm'

export interface IPhotos {
  id?: string
  album: string
  name: string
  path: string
  raw: string
  createdAt: Date
}

@Entity()
export class Photos {
  @PrimaryColumn('uuid')
  public id: string

  @Column()
  public album: string

  @Column({
    length: 100
  })
  public name: string

  @Column()
  public path: string

  @Column()
  public raw: string

  @Column()
  public createdAt: Date
}
