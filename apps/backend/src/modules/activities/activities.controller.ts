import { Controller, Get, Post, Patch, Param, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly service: ActivitiesService) {}

  @Get()
  list(@Req() req: Request, @Query('leadId') leadId?: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.list(tenantId, leadId);
  }

  @Post()
  create(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.create(tenantId, body);
  }

  @Patch(':id/complete')
  markComplete(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.markComplete(tenantId, id);
  }
}
