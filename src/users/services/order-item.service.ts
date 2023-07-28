import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderItemDTO, UpdateOrderItemDto } from '../dtos/order-item.dto';
import { Order } from '../entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { OrderItem } from '../entities/order-item.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Product) private productRepo: Repository<Product>,
    @InjectRepository(OrderItem) private itemRepo: Repository<OrderItem>,
  ) {}

  async findById(id: number) {
    const orderItem = await this.itemRepo.findOne({ where: { id } });

    if (!orderItem) {
      throw new NotFoundException('Order item not found');
    }

    return orderItem;
  }

  async create(data: CreateOrderItemDTO) {
    const order = await this.orderRepo.findOne({
      where: { id: data.orderId },
    });
    const product = await this.productRepo.findOne({
      where: { id: data.productId },
    });
    const item = new OrderItem();
    item.order = order;
    item.product = product;
    item.quantity = data.quantity;
    return await this.itemRepo.save(item);
  }

  async update(id: number, data: UpdateOrderItemDto) {
    const orderItem = await this.itemRepo.findOne({ where: { id } });

    if (!orderItem) {
      throw new NotFoundException('Order item not found');
    }

    orderItem.quantity = data.quantity;

    return await this.itemRepo.save(orderItem);
  }

  async remove(id: number) {
    const orderItem = await this.itemRepo.findOne({ where: { id } });

    if (!orderItem) {
      throw new NotFoundException('Order item not found');
    }

    return await this.itemRepo.remove(orderItem);
  }
}
