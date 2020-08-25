import {
    IsInt,
    IsAlpha,
    MaxLength,
    IsDate,
    IsDecimal
} from "class-validator";

export class PagosCreateDto {

    @IsDecimal()
    monto_total
    @IsAlpha()
    tipo_pago
    @IsAlpha()
    numero_tarjeta
    @IsAlpha()
    @MaxLength(3)
    digito_seguridad
    @IsDate()
    fecha_caducidad
}