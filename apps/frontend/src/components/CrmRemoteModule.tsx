'use client';

import React, { useState } from 'react';

export interface CrmRemoteProps {
  tenantId?: string;
  userRole?: string;
  theme?: 'dark' | 'light';
}

export function CrmRemoteModule({ tenantId = 'tenant-demo', userRole = 'ADMIN' }: CrmRemoteProps) {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'activities' | 'customers'>('pipeline');

  return (
    <div className="w-full bg-slate-950 text-slate-100 rounded-xl border border-slate-800 p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white text-xs">
            CRM
          </span>
          <div>
            <h3 className="text-sm font-semibold text-white">Omyxia Customer & Sales Pipeline (Remote Module)</h3>
            <p className="text-xs text-slate-400">Tenant: <span className="font-mono text-indigo-400">{tenantId}</span> | Role: <span className="font-mono text-slate-300">{userRole}</span></p>
          </div>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'pipeline' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            ไปป์ไลน์
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'activities' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            กิจกรรม
          </button>
          <button
            onClick={() => setActiveTab('customers')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${activeTab === 'customers' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            รายชื่อลูกค้า
          </button>
        </div>
      </div>

      {activeTab === 'pipeline' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <span className="font-bold text-slate-400">ลีดใหม่ (2)</span>
            <div className="mt-2 text-slate-200 font-medium">คุณธวัชชัย รุ่งแสง</div>
            <div className="text-indigo-400 font-mono font-bold">฿ 180,000</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <span className="font-bold text-slate-400">เสนอราคา (2)</span>
            <div className="mt-2 text-slate-200 font-medium">คุณอรรถพล กุลวดี</div>
            <div className="text-indigo-400 font-mono font-bold">฿ 890,000</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
            <span className="font-bold text-slate-400">ปิดสำเร็จ (1)</span>
            <div className="mt-2 text-slate-200 font-medium">คุณณัฐนนท์ ภัทรพงษ์</div>
            <div className="text-emerald-400 font-mono font-bold">฿ 1,200,000</div>
          </div>
        </div>
      )}

      {activeTab === 'activities' && (
        <div className="text-xs text-slate-400 space-y-1">
          <p>• ประชุมนำเสนอระบบ ERP & HRM ให้ทีมบริหาร สยาม รีเทล (วันนี้ 14:00 น.)</p>
          <p>• โทรติดตามผลการพิจารณาใบเสนอราคา Solution Cloud (พรุ่งนี้ 10:30 น.)</p>
        </div>
      )}

      {activeTab === 'customers' && (
        <div className="text-xs text-slate-400 space-y-1">
          <p>• CUST-001: บริษัท สยาม รีเทล คอร์ปอเรชั่น จำกัด (วงเงิน ฿ 3,000,000)</p>
          <p>• CUST-002: บริษัท เทค สมาร์ท จำกัด (วงเงิน ฿ 1,500,000)</p>
        </div>
      )}
    </div>
  );
}

export default CrmRemoteModule;
