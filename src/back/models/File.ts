import { Entity, PrimaryKey, Property, OneToOne, Index } from 'mikro-orm'

export enum TypeEnum {
  TAPE = 'tape'
}

@Entity({
  tableName: 'files'
})
export class File {
  @PrimaryKey()
  id!: number

  @Index()
  @Property()
  name!: string
  
  @Property()
  type!: string

  @Property({ type: 'text' })
  data!: string
}
