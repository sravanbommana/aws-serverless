import { IsNumber, Length } from "class-validator";

export class ProductInput {
  id: string;

  @Length(3, 128)
  name: string;

  description: string;

  categories: number;

  image_url: string;

  @IsNumber()
  price: number;

  detail_image: string;

  thumbnail_image: string;

  availability: boolean;
}
