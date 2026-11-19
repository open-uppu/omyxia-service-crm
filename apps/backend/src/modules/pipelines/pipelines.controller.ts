import { Controller, Get, Post, Param, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { PipelinesService } from './pipelines.service';

@Controller('pipelines')
export class PipelinesController {
  constructor(private readonly service: PipelinesService) {}

  @Get()
  list(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.list(tenantId);
  }

  @Get(':id')
  get(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.get(tenantId, id);
  }

  @Post()
  create(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.create(tenantId, body);
  }
}
