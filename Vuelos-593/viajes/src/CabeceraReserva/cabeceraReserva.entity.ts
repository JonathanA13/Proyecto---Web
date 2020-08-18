import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class CabeceraReservaEntity {
    @PrimaryGeneratedColumn()
    id_cabecera_reserva: number

    @Column()
    estado_reserva: string

    @Column()
    observaciones: string
}