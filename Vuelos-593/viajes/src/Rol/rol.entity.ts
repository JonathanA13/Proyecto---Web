import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class RolEntity {
    @PrimaryGeneratedColumn()
    id_rol: number

    @Column()
    tipo_rol: string
}