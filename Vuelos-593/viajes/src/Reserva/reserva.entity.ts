import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CabeceraReservaEntity} from "../CabeceraReserva/cabeceraReserva.entity";
import {AsientoEntity} from "../Asientos/asiento.entity";

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

    @ManyToOne(
        type => CabeceraReservaEntity,
        cabeceraReserva => cabeceraReserva.reservas
    )
    cabeceraReserva: CabeceraReservaEntity;

    @ManyToOne(
        type => AsientoEntity,
        asiento => asiento.reservas
    )
    asiento: AsientoEntity;
}