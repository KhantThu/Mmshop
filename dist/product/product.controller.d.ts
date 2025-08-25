import { ProductService } from './product.service';
import { Product } from '@prisma/client';
type InputData = {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    productCategory: string;
    productType: string;
};
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProduct(id: string): Promise<Product>;
    createProduct(data: InputData): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
export {};
