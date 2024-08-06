import { APIGatewayEvent } from "aws-lambda";
import { ProductRepository } from "../repository/product-respository";
import { ErrorResponse, SuccessResponse } from "../utility/response";
import { plainToClass } from "class-transformer";
import { ProductInput } from "../dto/product-input";
import { AppValidationError } from "../utility/errors";
import { CategoryRepository } from "../repository/category-repository";

export class ProductService {
  _repository: ProductRepository;
  constructor(repository: ProductRepository) {
    this._repository = repository;
  }

  async createProduct(event: APIGatewayEvent) {
    const input = plainToClass(ProductInput, JSON.parse(event.body!));
    const error = await AppValidationError(input);
    if (error) {
      return ErrorResponse(404, error);
    }

    const data = await this._repository.createProduct(input);
    await new CategoryRepository().addItem({
      id: input.categories,
      products: [data._id],
    });
    return SuccessResponse(data);
  }

  async getProducts(event: APIGatewayEvent) {
    const data = await this._repository.getAllProducts();
    return SuccessResponse(data);
  }

  async getProduct(event: APIGatewayEvent) {
    const productid = event.pathParameters?.id;
    if (!productid) {
      return ErrorResponse(403, "Please provide product id");
    }
    const data = await this._repository.getProductById(productid);
    return SuccessResponse(data);
  }

  async editProduct(event: APIGatewayEvent) {
    const productid = event.pathParameters?.id;
    if (!productid) {
      return ErrorResponse(403, "Please provide product id");
    }
    const input = plainToClass(ProductInput, JSON.parse(event.body!));
    const error = await AppValidationError(productid);
    if (error) {
      return ErrorResponse(404, error);
    }

    input.id = productid;
    const data = await this._repository.editProduct(input);
    return SuccessResponse(data);
  }

  async deleteProduct(event: APIGatewayEvent) {
    const productid = event.pathParameters?.id;
    if (!productid) {
      return ErrorResponse(403, "Please provide product id");
    }
    const { categories, deleteResult } = await this._repository.deleteProduct(
      productid
    );
    await new CategoryRepository().addItem({
      id: categories,
      products: [productid],
    });
    return SuccessResponse(deleteResult);
  }
}
