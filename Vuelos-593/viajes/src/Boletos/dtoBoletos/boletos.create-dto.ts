import {
    IsInt,
    IsAlpha,
    Min, Max,
    IsDate,
    IsDecimal
} from "class-validator";


export class BoletosCreateDto {

    @IsDate()
    fecha_salida

    @IsDecimal()
    costo_boleto

    @IsAlpha()
    puerta_abordaje
}