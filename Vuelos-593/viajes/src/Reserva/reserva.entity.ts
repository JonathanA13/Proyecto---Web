import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ReservaEntity {
    @PrimaryGeneratedColumn()
    id_reserva: number

    @Column()
    fecha_reserva: string

    @Column()
    tipo: string

    @Column()
    hora_abordaje: string

}