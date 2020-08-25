import {Column, Double, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";
import {AsientoEntity} from "../Asientos/asiento.entity";
import {PagosEntity} from "../Pagos/pagos.entity";

@Entity()
export class BoletosEntity {
    @PrimaryGeneratedColumn()
    id_Boleto:number
    @Column()
    fecha_salida?: Date
    @Column({
        name: 'costo',
        type: 'double',
    })
    costo_boleto?: Double
    @Column()
    puerta_abordaje?:string

    @ManyToOne(
    tupe=>AsientoEntity,
        asiento=>asiento.boletos
    )
    asiento:AsientoEntity

    @OneToMany(
        type=>PagosEntity,
        pagos=>pagos.boleto
    )
    pagos:PagosEntity[]
}