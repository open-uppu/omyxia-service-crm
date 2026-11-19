import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string, leadId?: string) {
    return this.prisma.crmActivity.findMany({
      where: {
        tenantId,
        ...(leadId && { leadId }),
      },
      include: { lead: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(tenantId: string, data: any) {
    return this.prisma.crmActivity.create({
      data: {
        tenantId,
        leadId: data.leadId,
        userId: data.userId || 'system-user',
        type: data.type || 'NOTE',
        subject: data.subject,
        description: data.description,
        dueAt: data.dueAt ? new Date(data.dueAt) : null,
      },
    });
  }

  async markComplete(tenantId: string, id: string) {
    return this.prisma.crmActivity.update({
      where: { id },
      data: {
        completedAt: new Date(),
      },
    });
  }
}
