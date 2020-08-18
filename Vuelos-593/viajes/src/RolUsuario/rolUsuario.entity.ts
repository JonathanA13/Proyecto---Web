import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class RolUsuarioEntity {
    @PrimaryGeneratedColumn()
    id_rol_usuario: number

    @Column()
    detalle: string
}