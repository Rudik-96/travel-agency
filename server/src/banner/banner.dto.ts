// banner.dto.ts
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class BannerPlaceInfoItemDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsOptional()
  icon: string;
}

export class CreateBannerDto {
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  placeName: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BannerPlaceInfoItemDto)
  placeInfo: BannerPlaceInfoItemDto[];
}