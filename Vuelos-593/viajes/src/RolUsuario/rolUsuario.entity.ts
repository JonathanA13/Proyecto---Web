import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {RolEntity} from "../Rol/rol.entity";

@Entity()
export class RolUsuarioEntity {
    @PrimaryGeneratedColumn()
    id_rol_usuario: number

    @Column()
    detalle: string

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.rolUsuarios
    )
    usuario: UsuarioEntity;

    @ManyToOne(
        type => RolEntity,
        rol => rol.rolUsuarios
    )
    rol: RolEntity;
}