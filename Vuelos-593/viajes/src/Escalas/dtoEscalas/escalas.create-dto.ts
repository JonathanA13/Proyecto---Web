import {
    IsInt,
    IsAlpha,
    Min, Max,
    IsDate,
    IsDecimal
} from "class-validator";

export class EscalasCreateDto {
    @IsAlpha()
    lugar_escala
    @IsAlpha()
    tiempo_escala
}