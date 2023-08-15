import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Listing } from "./listing.entities";
import { AbstractEntity } from "src/database/abstract.entities";
import { Comment } from "./comments.entities";
import { Tag } from "./tag.entity";
@Entity()
export class Item  extends AbstractEntity<Item>{
  

    @Column()
    name: string

    @Column({default: true})
    public: boolean;
     
    @OneToOne(() => Listing, {cascade: true})
    @JoinColumn()
    listing: Listing
    
    @OneToMany(()=>Comment, (comment)=> comment.item, {cascade: true})
    comments: Comment[]
     
    @ManyToMany(()=> Tag, {cascade: true})
    @JoinTable()
    tags: Tag[]

   

   
}
 

