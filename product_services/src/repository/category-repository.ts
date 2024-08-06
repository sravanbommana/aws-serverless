import { availableMemory } from "process";
import { ProductInput } from "../dto/product-input";
import { ProductDoc, products } from "../models/product-model";

export class CategoryRepository {

    async createProduct({
        name,
        description,
        price,
        category_id,
        image_url
    }: ProductInput) {
        return products.create({
            name,
            description,
            price,
            category_id,
            image_url,
            availability: true
        })
    }

    async getAllProducts(offset = 0, pages?: number) {
        return products.find().skip(offset).limit(pages ? pages : 500);
    }

    async getProductById(id: string) {
        return products.findById(id);
    }

    async editProduct({
        id,
        name,
        description,
        price,
        category_id,
        image_url,
        availability
    }: ProductInput) {
        let existingProduct = await products.findById(id) as ProductDoc;
        existingProduct.name = name;
        existingProduct.description = description;
        existingProduct.price = price;
        existingProduct.category_id = category_id;
        existingProduct.image_url = image_url;
        existingProduct.availability = availability;
        return existingProduct.save();
    }

    async deleteProduct(_id:string) {
        return products.deleteOne({_id})
    }
}