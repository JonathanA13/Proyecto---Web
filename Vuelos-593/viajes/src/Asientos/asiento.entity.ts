import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ReservaEntity} from "../Reserva/reserva.entity";

@Entity()
export class AsientoEntity {
    @PrimaryGeneratedColumn()
    id_Asiento:number
    @Column()
    numero_asiento:number
    @Column()
    tipo_asiento:string

    @OneToMany(
        type => ReservaEntity,
        reserva => reserva.asiento
    )
    reservas: ReservaEntity;


}