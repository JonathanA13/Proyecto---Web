import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class EscalasEntity {
    @PrimaryGeneratedColumn()
    id_Escalas:number

    @Column()
    lugar_escala:string

    @Column()
    tiempo_escala:string
}