import { PrismaService } from './prisma.service';
import { Product, Prisma } from '@prisma/client';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    product(productWhereUniqueInput: Prisma.ProductWhereUniqueInput): Promise<Product | null>;
    createProduct(data: Prisma.ProductCreateInput): Promise<Product>;
    deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product>;
}
