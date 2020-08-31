
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {BoletosEntity} from "../Boletos/boletos.entity";
import {VueloEntity} from "../Vuelo/vuelo.entity";




@Entity()
export class AsientoEntity {
    @PrimaryGeneratedColumn()
    id_Asiento:number
    @Column()
    numero_asiento:number
    @Column()
    tipo_asiento:string

    @OneToMany(

        type=>BoletosEntity,
        boleto=>boleto.asiento
    )
    boletos:BoletosEntity[]
@ManyToOne(
    type => VueloEntity,
    vuelo=>vuelo.asientos
)
    vuelo:VueloEntity


}