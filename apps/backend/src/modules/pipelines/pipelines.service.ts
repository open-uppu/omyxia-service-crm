import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class PipelinesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string) {
    return this.prisma.crmPipeline.findMany({
      where: { tenantId },
      include: { leads: true },
    });
  }

  async get(tenantId: string, id: string) {
    return this.prisma.crmPipeline.findFirst({
      where: { id, tenantId },
      include: { leads: true },
    });
  }

  async create(tenantId: string, data: any) {
    const defaultStages = [
      { id: 'new', name: 'ลีดใหม่ (New Lead)', order: 1 },
      { id: 'contacted', name: 'ติดต่อแล้ว (Contacted)', order: 2 },
      { id: 'qualified', name: 'ผ่านเกณฑ์ (Qualified)', order: 3 },
      { id: 'proposal', name: 'ส่งใบเสนอราคา (Proposal)', order: 4 },
      { id: 'won', name: 'ปิดการขายสำเร็จ (Closed Won)', order: 5 },
      { id: 'lost', name: 'ปิดการขายไม่สำเร็จ (Closed Lost)', order: 6 },
    ];

    return this.prisma.crmPipeline.create({
      data: {
        tenantId,
        name: data.name,
        stages: data.stages || defaultStages,
        isDefault: data.isDefault ?? false,
      },
    });
  }
}
