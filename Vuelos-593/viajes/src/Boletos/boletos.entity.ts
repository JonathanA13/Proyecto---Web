import {Column, Double, Entity, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";

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
}