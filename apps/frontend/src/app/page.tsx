export default function CrmDashboard() {
  const kpis = [
    { label: 'มูลค่าไปป์ไลน์รวม (Pipeline Value)', value: '฿ 4,850,000', change: '+18.4%', isPositive: true },
    { label: 'ลีดที่กำลังติดตาม (Active Leads)', value: '42 ลีด', change: '+6 ลีดใหม่', isPositive: true },
    { label: 'อัตราปิดการขายสำเร็จ (Win Rate)', value: '38.5%', change: '+3.2%', isPositive: true },
    { label: 'รอบระยะเวลาขายเฉลี่ย (Avg Sales Cycle)', value: '24 วัน', change: '-2 วัน', isPositive: true },
  ];

  const upcomingActivities = [
    { type: 'MEETING', subject: 'นำเสนอระบบ ERP & HRM ให้ทีมบริหาร สยาม รีเทล', lead: 'ห้างหุ้นส่วนจำกัด สยาม รีเทล', time: 'วันนี้ 14:00 น.', user: 'สมชาย วาณิช' },
    { type: 'CALL', subject: 'โทรติดตามผลการพิจารณาใบเสนอราคา Solution Cloud', lead: 'บริษัท เทค สมาร์ท จำกัด', time: 'พรุ่งนี้ 10:30 น.', user: 'วิภาดา รุ่งเรือง' },
    { type: 'TASK', subject: 'ส่งร่างสัญญาจัดซื้อและ SLA ให้ฝ่ายกฎหมายคู่ค้า', lead: 'บริษัท พลังงานก้าวหน้า จำกัด', time: '22 พ.ย. 2026', user: 'กานต์ นพคุณ' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">ระบบบริหารงานขายและความสัมพันธ์ลูกค้า (CRM)</h2>
        <p className="text-slate-400 mt-1">บริการไมโครเซอร์วิสสำหรับการติดตามลีด ไปป์ไลน์ และกิจกรรมปิดการขาย</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 shadow-sm">
            <span className="text-xs font-medium text-slate-400">{kpi.label}</span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-2xl font-bold text-white tracking-tight">{kpi.value}</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/40">
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">กิจกรรมการขายที่กำลังจะมาถึง (Upcoming Sales Activities)</h3>
            <a href="/activities" className="text-xs text-indigo-400 hover:underline">ดูปฏิทินงาน →</a>
          </div>
          <div className="divide-y divide-slate-800">
            {upcomingActivities.map((act, i) => (
              <div key={i} className="py-3.5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      act.type === 'MEETING' ? 'bg-purple-900/40 text-purple-400 border border-purple-800/30' :
                      act.type === 'CALL' ? 'bg-emerald-900/40 text-emerald-400 border border-emerald-800/30' :
                      'bg-blue-900/40 text-blue-400 border border-blue-800/30'
                    }`}>
                      {act.type}
                    </span>
                    <span className="text-xs font-medium text-white">{act.subject}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">ลูกค้า: {act.lead} • ผู้ดูแล: {act.user}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-indigo-400">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
          <h3 className="font-semibold text-white">ข้อมูลบริการ (Microservice Details)</h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Microservice Service ID</span>
              <span className="font-mono text-indigo-400">crm</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Frontend Port</span>
              <span className="font-mono text-slate-200">:3003</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Backend API Port</span>
              <span className="font-mono text-slate-200">:4003</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-400">Database</span>
              <span className="font-mono text-slate-200">omyxia_crm</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-400">Access Control Gate</span>
              <span className="text-indigo-400 font-semibold">JWT + Plan Verification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
