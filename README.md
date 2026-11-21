<p align="center">
  <img src="docs/assets/service-banner.svg" alt="Omyxia CRM Microservice Banner" width="100%">
</p>

<div align="center">

# 🎯 Omyxia CRM Microservice (`omyxia-service-crm`)

### Decoupled Customer Relationship Management, Sales Pipelines & Kanban Microservice

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)]()
[![NestJS](https://img.shields.io/badge/NestJS-10.3-E0234E?logo=nestjs)]()
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)]()
[![Prisma](https://img.shields.io/badge/Prisma-5.16-2D3748?logo=prisma)]()
[![License](https://img.shields.io/badge/License-AGPL--3.0-blue)]()

Part of the **[Omyxia Enterprise Microservices Ecosystem](https://github.com/open-uppu/omyxia-portal-shell)** (`open-uppu`).

[🏛️ Architecture](#-system-architecture) ·
[📸 UI Screenshots](#-visual-interface-showcase) ·
[🎯 Core Domains](#-core-domains) ·
[🛠️ Quick Start](#-quick-start)

</div>

---

## 🏛️ System Architecture

<p align="center">
  <img src="docs/assets/architecture-topology.svg" alt="Omyxia Architecture Topology" width="100%">
</p>

* **Frontend Remote:** Next.js 14 on port `3003` (Exports `CrmRemoteModule` for App Shell federation)
* **Backend API:** NestJS on port `4003` (Prefix `/api/v1`)
* **Dedicated Database:** PostgreSQL database `omyxia_crm` managed via Prisma
* **Entitlement Perimeter:** Validates `X-Tenant-ID`, `X-Tenant-Plan`, and `X-User-Role` from Gateway

---

## 📸 Visual Interface Showcase

<table align="center" width="100%">
  <tr>
    <td align="center" width="60%">
      <img src="docs/screenshots/crm-pipeline.png" alt="CRM Sales Pipeline Kanban" width="100%"><br>
      <sub><b>🎯 Sales Pipeline &amp; Kanban Stages</b> — Real-time deal values, win probability, and stage transitions</sub>
    </td>
    <td align="center" width="40%">
      <img src="docs/screenshots/login.png" alt="Login Screen" width="100%"><br>
      <sub><b>🔐 Tenant SSO Integration</b></sub>
    </td>
  </tr>
</table>

---

## 🎯 Core Domains

1. **Sales Pipelines & Kanban:** Stage progression (New -> Contacted -> Qualified -> Proposal -> Won/Lost)
2. **Lead Tracking:** Probability-weighted pipeline value, customer affiliations, close dates
3. **Sales Activities:** Customer meetings, phone logs, follow-up reminders
4. **Customer Accounts:** Master organization registry, billing terms, active deal history

---

## 🛠️ Quick Start

```bash
# Install dependencies
pnpm install

# Push schema to isolated database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/omyxia_crm?schema=public" pnpm prisma db push

# Run Backend (:4003) & Frontend Remote (:3003)
pnpm --filter @omyxia/crm-backend dev
pnpm --filter @omyxia/crm-frontend dev
```

---

<p align="center">
  <sub>Licensed under AGPL-3.0 · Built by Omyxia Architecture &amp; Engineering Management</sub>
</p>
