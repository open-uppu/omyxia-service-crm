# Omyxia CRM Microservice 🎯

Decoupled Microservice for Customer Relationship Management (CRM), Lead Management, Opportunity Pipelines, Sales Kanban, and Customer Activity Tracking.

Part of the **Omyxia Enterprise SaaS Ecosystem** (`open-uppu`).

## Architecture & Ports

* **Frontend Remote:** Next.js 14 on port `3003` (Exports `CrmRemoteModule` for App Shell federation)
* **Backend API:** NestJS on port `4003` (Prefix `/api/v1`)
* **Database:** Dedicated PostgreSQL database (`omyxia_crm`) managed via Prisma
* **Entitlement Perimeter:** Validates `X-Tenant-ID`, `X-Tenant-Plan`, and `X-User-Role` from Gateway

## Core Domains

1. **Sales Pipelines & Kanban:** Stage progression (New -> Contacted -> Qualified -> Proposal -> Won/Lost)
2. **Lead Tracking:** Probability-weighted pipeline value, customer affiliations, close dates
3. **Sales Activities:** Meetings, phone calls, tasks, follow-up notifications
4. **Customer Accounts:** Master registry, credit terms, active deals

## Quick Start

```bash
# Install dependencies
pnpm install

# Setup database
pnpm db:push

# Run development servers
pnpm dev
```
