import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RolUsuarioEntity} from "../RolUsuario/rolUsuario.entity";
import {CabeceraReservaEntity} from "../CabeceraReserva/cabeceraReserva.entity";

@Entity('Usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number

    @Column()
    nombre_usuario: string

    @Column()
    apellido_usuario: string

    @Column()
    correo_usuario: string

    @Column()
    edad_usuario: string

    @Column()
    contrasenia: string

    @OneToMany(
        type => RolUsuarioEntity,
        rolUsuario => rolUsuario.usuario
    )
    rolUsuarios: RolUsuarioEntity[];

    @OneToMany(
        type => CabeceraReservaEntity,
        cabeceraReserva => cabeceraReserva.usuario
    )
    cabeceraReservas: CabeceraReservaEntity[];

}