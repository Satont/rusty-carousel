import { Entity, PrimaryKey, SerializedPrimaryKey, Property, OneToMany, Collection, Enum, Index } from 'mikro-orm'
import { ObjectId } from 'mongodb'
import { Item } from './Item'

export enum TypeEnum {
  TAPE = 'tape'
}

@Entity({
  tableName: 'carousels'
})
export class Carousel {
  @PrimaryKey()
  _id: ObjectId
  
  @SerializedPrimaryKey()
  id!: string

  @Index()
  @Property()
  name!: string

  @OneToMany(() => Item, item => item.carousel)
  items = new Collection<Item[]>(this)

  @Enum(() => TypeEnum)
  type: TypeEnum = TypeEnum.TAPE
}
