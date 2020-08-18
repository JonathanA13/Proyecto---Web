import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
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

}