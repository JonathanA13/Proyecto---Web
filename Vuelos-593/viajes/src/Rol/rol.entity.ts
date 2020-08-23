import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolUsuarioEntity} from "../RolUsuario/rolUsuario.entity";

@Entity()

export class RolEntity {
    @PrimaryGeneratedColumn()
    id_rol: number

    @Column()
    tipo_rol: string

    @OneToMany(
        type => RolUsuarioEntity,
        rolUsuario => rolUsuario.rol
    )
    rolUsuarios: RolUsuarioEntity[];
}