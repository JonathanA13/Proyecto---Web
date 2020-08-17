import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class VueloEntity {
    @PrimaryGeneratedColumn()
    id_Vuelo:number
    @Column()
    asientos_diponibles:number
    @Column()
    asientos_ocupados:number

    @Column()
    lugar_destino:string
    @Column()
    estado_vuelo:string
    @Column()
    tipo_vuelo:string
}