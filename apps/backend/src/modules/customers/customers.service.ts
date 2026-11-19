import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string) {
    return this.prisma.customer.findMany({
      where: { tenantId },
      include: { leads: true },
      orderBy: { name: 'asc' },
    });
  }

  async get(tenantId: string, id: string) {
    return this.prisma.customer.findFirst({
      where: { id, tenantId },
      include: { leads: true },
    });
  }

  async create(tenantId: string, data: any) {
    return this.prisma.customer.create({
      data: {
        tenantId,
        code: data.code,
        name: data.name,
        taxId: data.taxId,
        email: data.email,
        phone: data.phone,
        address: data.address,
        creditLimit: data.creditLimit || 0,
        paymentTerms: data.paymentTerms || 30,
      },
    });
  }
}
