import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {BoletosEntity} from "../Boletos/boletos.entity";

@Entity()
export class PagosEntity {
    @PrimaryGeneratedColumn()
    id_Pago:number
    @Column()
    monto_total:Float64Array
    @Column()
    tipo_pago:string
    @Column()
    numero_tarjeta:string

    @Column()
    digito_seguridad:string

    @Column()
    fecha_caducidad:Date

    @ManyToOne(
        type => BoletosEntity,
        boleto=>boleto.pagos
    )
    boleto:BoletosEntity
}