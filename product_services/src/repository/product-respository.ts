import { availableMemory } from "process";
import { ProductInput } from "../dto/product-input";
import { ProductDoc, products } from "../models/product-model";

export class ProductRepository {
  async createProduct({
    name,
    description,
    price,
    categories,
    thumbnail_image,
    detail_image,
    availability,
  }: ProductInput) {
    return products.create({
      name,
      description,
      price,
      categories,
      availability,
      thumbnail_image,
      detail_image,
    });
  }

  async getAllProducts(offset = 0, pages?: number) {
    return products
      .find()
      .skip(offset)
      .limit(pages ? pages : 500);
  }

  async getProductById(id: string) {
    return products.findById(id);
  }

  async editProduct({
    id,
    name,
    description,
    price,
    categories,
    thumbnail_image,
    availability,
    detail_image,
  }: ProductInput) {
    let existingProduct = (await products.findById(id)) as ProductDoc;
    existingProduct.name = name;
    existingProduct.description = description;
    existingProduct.price = price;
    existingProduct.categories = categories;
    existingProduct.thumbnail_image = thumbnail_image;
    existingProduct.detail_image = detail_image;
    existingProduct.availability = availability;
    return existingProduct.save();
  }

  async deleteProduct(_id: string) {
    return products.deleteOne({ _id });
  }
}
