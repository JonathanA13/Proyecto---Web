import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {VueloEntity} from "../Vuelo/vuelo.entity";


@Entity()
export class EscalasEntity {
    @PrimaryGeneratedColumn()
    id_Escalas:number

    @Column()
    lugar_escala:string

    @Column()
    tiempo_escala:string

  @ManyToOne(
        type => VueloEntity,
        vuelo=>vuelo.escalas
    )
    vuelo:VueloEntity;


}