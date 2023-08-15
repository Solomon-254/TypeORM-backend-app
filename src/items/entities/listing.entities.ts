import { AbstractEntity } from "src/database/abstract.entities";
import { Column, Entity } from "typeorm";

@Entity()
    export class Listing extends AbstractEntity<Listing>{
     @Column()
     description: string;

     @Column()
     rating:string;

    
    }
