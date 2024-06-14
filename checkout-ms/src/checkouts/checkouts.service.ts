import { Body, Injectable } from '@nestjs/common';
import { CreateCheckoutDto } from './dto/create-checkout.dto';
import { Checkout } from './entities/checkout.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

const PRODUCTS_LIST = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a product description',
    image_url: 'https://via.placeholder.com/150',
    price: 300,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a product description',
    image_url: 'https://via.placeholder.com/150',
    price: 400,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a product description',
    image_url: 'https://via.placeholder.com/150',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a product description',
    image_url: 'https://via.placeholder.com/150',
    price: 200,
  },
];

@Injectable()
export class CheckoutsService {
  constructor(
    @InjectRepository(Checkout) private checkoutRepo: Repository<Checkout>,
  ) {}

  async create(@Body() createCheckoutDto: CreateCheckoutDto) {
    const productIds = createCheckoutDto.items.map((item) => item.product_id);
    const products = PRODUCTS_LIST.filter((product) =>
      productIds.includes(product.id),
    ); // chamada externa para capturar os produtos do ms de catálogo

    const checkout = Checkout.create({
      items: createCheckoutDto.items.map((item) => {
        const product = products.find((p) => p.id === item.product_id);
        return {
          quantity: item.quantity,
          price: product.price,
          product: {
            name: product.name,
            description: product.description,
            image_url: product.image_url,
            product_id: product.id,
          },
        };
      }),
    });
    await this.checkoutRepo.save(checkout);

    return checkout;
  }

  findAll() {
    return this.checkoutRepo.find();
  }

  findOne(id: number) {
    return this.checkoutRepo.findOneByOrFail({
      id,
    });
  }

  async pay(id: number) {
    const checkout = await this.checkoutRepo.findOneByOrFail({
      id,
    });

    checkout.pay();
    return this.checkoutRepo.save(checkout);
  }
}
