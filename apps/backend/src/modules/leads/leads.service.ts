import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class LeadsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string, stage?: string, status?: string) {
    return this.prisma.crmLead.findMany({
      where: {
        tenantId,
        ...(stage && { stage }),
        ...(status && { status: status as any }),
      },
      include: { customer: true, activities: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async get(tenantId: string, id: string) {
    return this.prisma.crmLead.findFirst({
      where: { id, tenantId },
      include: { customer: true, activities: true },
    });
  }

  async create(tenantId: string, data: any) {
    return this.prisma.crmLead.create({
      data: {
        tenantId,
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        value: data.value || 0,
        probability: data.probability || 10,
        stage: data.stage || 'new',
        status: data.status || 'NEW',
        source: data.source || 'Website',
        pipelineId: data.pipelineId,
        customerId: data.customerId,
        expectedCloseDate: data.expectedCloseDate ? new Date(data.expectedCloseDate) : null,
        notes: data.notes,
      },
    });
  }

  async updateStage(tenantId: string, id: string, stage: string, status?: string) {
    return this.prisma.crmLead.update({
      where: { id },
      data: {
        stage,
        ...(status && { status: status as any }),
      },
    });
  }

  async getPipelineSummary(tenantId: string) {
    const leads = await this.prisma.crmLead.findMany({
      where: { tenantId },
    });

    const totalValue = leads.reduce((sum, l) => sum + Number(l.value), 0);
    const wonCount = leads.filter(l => l.status === 'WON').length;
    const lostCount = leads.filter(l => l.status === 'LOST').length;

    return {
      totalLeads: leads.length,
      totalPipelineValue: totalValue,
      wonCount,
      lostCount,
      winRate: leads.length > 0 ? ((wonCount / (wonCount + lostCount || 1)) * 100).toFixed(1) + '%' : '0%',
    };
  }
}
