import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderItemDTO } from '../dtos/order-item.dto';
import { OrderItemService } from '../services/order-item.service';

@Controller('order-item')
export class OrderItemController {
  constructor(private orderItemService: OrderItemService) {}
  @Post()
  create(@Body() payload: CreateOrderItemDTO) {
    return this.orderItemService.create(payload);
  }
}
