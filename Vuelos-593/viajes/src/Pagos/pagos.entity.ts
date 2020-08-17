import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

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
}