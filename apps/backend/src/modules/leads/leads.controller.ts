import { Controller, Get, Post, Patch, Param, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly service: LeadsService) {}

  @Get()
  list(
    @Req() req: Request,
    @Query('stage') stage?: string,
    @Query('status') status?: string,
  ) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.list(tenantId, stage, status);
  }

  @Get('summary')
  summary(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.getPipelineSummary(tenantId);
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

  @Patch(':id/stage')
  updateStage(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() body: { stage: string; status?: string },
  ) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.updateStage(tenantId, id, body.stage, body.status);
  }
}
