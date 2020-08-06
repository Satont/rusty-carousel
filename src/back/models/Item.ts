import { Entity, PrimaryKey, SerializedPrimaryKey, Index, Property, ManyToOne } from 'mikro-orm'
import { ObjectId } from 'mongodb'
import { Carousel } from './Carousel'

@Entity({
  tableName: 'items'
})
export class Item {
  @PrimaryKey()
  _id: ObjectId
  
  @SerializedPrimaryKey()
  id!: string

  @Property()
  name!: string

  @ManyToOne()
  carousel!: Carousel
}
