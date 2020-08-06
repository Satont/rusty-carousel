import { Entity, PrimaryKey, Property, ManyToOne, OneToOne } from 'mikro-orm'
import { Carousel } from './Carousel'
import { File } from './File'

@Entity({
  tableName: 'items'
})
export class Item {
  @PrimaryKey()
  id: number

  @Property()
  name!: string

  @ManyToOne()
  carousel!: Carousel

  @OneToOne()
  image!: File
}
