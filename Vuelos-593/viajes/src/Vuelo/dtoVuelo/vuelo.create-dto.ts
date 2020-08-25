import {
    IsInt,
    IsAlpha,
    MaxLength,
    IsDate,
    IsDecimal
} from "class-validator";

export class VueloCreateDto {
    @IsInt()
    asientos_diponibles
    @IsInt()
    asientos_ocupados
    @IsAlpha()
    lugar_destino
    @IsAlpha()
    estado_vuelo
    @IsAlpha()
    tipo_vuelo
}