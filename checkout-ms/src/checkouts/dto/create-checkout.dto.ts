import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsPositive, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CheckoutItemDto {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  product_id: number;
}

export class CreateCheckoutDto {
  @ArrayNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CheckoutItemDto)
  items: CheckoutItemDto[];
}
