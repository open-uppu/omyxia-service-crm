export default function LeadsPage() {
  const columns = [
    {
      id: 'new',
      title: 'ลีดใหม่ (New)',
      color: 'border-slate-700 bg-slate-900/40',
      leads: [
        { name: 'คุณธวัชชัย รุ่งแสง', company: 'บริษัท สมาร์ท ลอจิสติกส์', value: '฿ 180,000', source: 'Web Form' },
        { name: 'คุณกิตติศักดิ์ พรหมมา', company: 'เอเซีย โฮลดิ้ง กรุ๊ป', value: '฿ 450,000', source: 'LinkedIn' },
      ],
    },
    {
      id: 'contacted',
      title: 'ติดต่อแล้ว (Contacted)',
      color: 'border-blue-900/60 bg-blue-950/20',
      leads: [
        { name: 'คุณพิมพ์ใจ สุวรรณ', company: 'ห้างหุ้นส่วน พิมพ์ไทย', value: '฿ 120,000', source: 'Referral' },
      ],
    },
    {
      id: 'proposal',
      title: 'เสนอราคา (Proposal)',
      color: 'border-amber-900/60 bg-amber-950/20',
      leads: [
        { name: 'คุณอรรถพล กุลวดี', company: 'บริษัท อัลฟ่า พรีเมียม จำกัด', value: '฿ 890,000', source: 'Direct Sales' },
        { name: 'คุณชลธิชา เจริญชัย', company: 'ไทย เมดิคอล ซัพพลาย', value: '฿ 320,000', source: 'Exhibition' },
      ],
    },
    {
      id: 'won',
      title: 'ปิดการขายสำเร็จ (Won)',
      color: 'border-emerald-900/60 bg-emerald-950/20',
      leads: [
        { name: 'คุณณัฐนนท์ ภัทรพงษ์', company: 'บริษัท สยาม รีเทล คอร์ปอเรชั่น', value: '฿ 1,200,000', source: 'Partner' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">ไปป์ไลน์การขาย (Sales Pipeline Kanban)</h2>
          <p className="text-xs text-slate-400 mt-1">บริหารจัดการลีดและโอกาสทางการขายในแต่ละขั้นตอนอย่างมีประสิทธิภาพ</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + เพิ่มลีดใหม่
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col.id} className={`rounded-xl border p-4 flex flex-col gap-3 min-h-[500px] ${col.color}`}>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-white">{col.title}</span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded-full text-slate-300 font-semibold">
                {col.leads.length}
              </span>
            </div>
            <div className="space-y-3 flex-1">
              {col.leads.map((lead, idx) => (
                <div key={idx} className="p-3.5 bg-slate-900 border border-slate-800 rounded-lg shadow-sm hover:border-slate-700 transition-colors">
                  <h4 className="text-xs font-semibold text-white">{lead.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{lead.company}</p>
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/80">
                    <span className="text-xs font-bold text-indigo-400 font-mono">{lead.value}</span>
                    <span className="text-[10px] text-slate-500 bg-slate-800/60 px-1.5 py-0.5 rounded">
                      {lead.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
