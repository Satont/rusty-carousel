import { Entity, PrimaryKey, Property, OneToOne, Index } from 'mikro-orm'
import { Item } from './Item'
import { Carousel } from './Carousel'

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


  @OneToOne(() => Item, item => item.image)
  item!: Item

  @OneToOne(() => Carousel, carousel => carousel.audio)
  carousel!: Item
}
