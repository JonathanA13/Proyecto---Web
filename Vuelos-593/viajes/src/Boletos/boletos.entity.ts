import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class BoletosEntity {
    @PrimaryGeneratedColumn()
    id_Boleto:number
    @Column()
    fecha_salida: Date
    @Column()
    costo_boleto: Float64Array
    @Column()
    puerta_abordaje:string
}