import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ServicesStack } from "./service-stack";
import { ApiGateWayStack } from "./api-gateway-stack";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ProductServicesStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const { productService, categoryService, dealsService } = new ServicesStack(
      this,
      "ProdctService",
      {}
    );
    new ApiGateWayStack(this, "ProdctApiGateWay", {
      productService,
      categoryService,
      dealsService,
    });
  }
}
