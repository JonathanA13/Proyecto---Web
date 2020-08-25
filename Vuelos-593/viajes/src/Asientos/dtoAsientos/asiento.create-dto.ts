import {
    IsInt,
    IsAlpha,
    Min, Max
} from "class-validator";

export class AsientoCreateDto{

    @IsInt()
    @Min(0)
    @Max(300)
    numero_asiento

    @IsAlpha()
    tipo_asiento
}