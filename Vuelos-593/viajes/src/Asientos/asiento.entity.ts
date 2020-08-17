import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class AsientoEntity {
    @PrimaryGeneratedColumn()
    id_Asiento:number
    @Column()
    numero_asiento:number
    @Column()
    tipo_asiento:string


}