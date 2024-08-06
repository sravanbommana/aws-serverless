import { timeStamp } from "console";
import mongoose from "mongoose";

type categoryModel = {
    name: string
    nameTranslations: string;
    parentId: string;
    subCategories: CategoryDoc[];
    products: string[];
    displayOrder: number; 
}
export type CategoryDoc = mongoose.Document & categoryModel;

const categorySchema = new mongoose.Schema({
    name: String,
    nameTranslations: { en: { type: String }, de: { type: String }},
    parentId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "categories"
    },
    subCategories: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "categories"
        }
    ],
    products: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "products"
        }
    ],
    displayOrder: { type: Number, default: 1}

},
    {
        toJSON: {
            transform(doc, ret, options) {
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;

            }
        },
        timeStamps: true
    },
);

const products = mongoose.models.products || mongoose.model<ProductDoc>("products", productSchema);

export { products }