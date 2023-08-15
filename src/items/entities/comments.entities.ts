import { AbstractEntity } from "src/database/abstract.entities";
import { Column, Entity, ManyToOne } from "typeorm";
import { Item } from "./item.entity";

@Entity() export class Comment extends AbstractEntity<Comment>{
    @Column()
    content: string;

    @ManyToOne(()=>Item, (item)=> item.comments)
    item: Item
   
}