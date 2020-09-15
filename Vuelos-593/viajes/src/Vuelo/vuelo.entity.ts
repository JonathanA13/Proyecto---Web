import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AsientoEntity} from "../Asientos/asiento.entity";
import {EscalasEntity} from "../Escalas/escalas.entity";


@Entity()
export class VueloEntity {
    @PrimaryGeneratedColumn()
    id_Vuelo:number
    @Column()
    asientos_diponibles:number
    @Column()
    asientos_ocupados:number

    @Column()
    lugar_destino:string
    @Column()
    estado_vuelo:string
    @Column()
    tipo_vuelo:string

   @OneToMany(
        type => AsientoEntity,
        asiento=>asiento.vuelo
    )
    asientos:AsientoEntity[]



    @OneToMany(
        type => EscalasEntity,
        escala => escala.vuelo
    )
    escalas: EscalasEntity[];



}