import { Entity, PrimaryKey, Property, OneToMany, OneToOne, Collection, Enum, Index } from 'mikro-orm'
import { Item } from './Item'
import { File } from './File'

export enum TypeEnum {
  TAPE = 'tape'
}

@Entity({
  tableName: 'carousels'
})
export class Carousel {
  @PrimaryKey()
  id: number

  @Index()
  @Property()
  name!: string

  @OneToMany(() => Item, item => item.carousel)
  items = new Collection<Item[]>(this)

  @Enum(() => TypeEnum)
  type: TypeEnum = TypeEnum.TAPE

  @OneToOne()
  audio!: File
}
