export default function ActivitiesPage() {
  const activities = [
    { type: 'MEETING', subject: 'นำเสนอระบบ ERP & HRM ให้ทีมบริหาร สยาม รีเทล', date: '19 พ.ย. 2026', time: '14:00 - 15:30', owner: 'สมชาย วาณิช', status: 'เสร็จสิ้น' },
    { type: 'CALL', subject: 'โทรติดตามผลการพิจารณาใบเสนอราคา Solution Cloud', date: '20 พ.ย. 2026', time: '10:30 - 11:00', owner: 'วิภาดา รุ่งเรือง', status: 'รอดำเนินการ' },
    { type: 'TASK', subject: 'ส่งร่างสัญญาจัดซื้อและ SLA ให้ฝ่ายกฎหมายคู่ค้า', date: '22 พ.ย. 2026', time: 'ทั้งวัน', owner: 'กานต์ นพคุณ', status: 'รอดำเนินการ' },
    { type: 'EMAIL', subject: 'ส่งโบรชัวร์และตารางเปรียบเทียบฟีเจอร์ Enterprise', date: '18 พ.ย. 2026', time: '16:45', owner: 'สมชาย วาณิช', status: 'เสร็จสิ้น' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">กิจกรรมการติดตามลูกค้า (Sales Activities)</h2>
          <p className="text-xs text-slate-400 mt-1">ตารางนัดหมาย การโทร ประชุม และงานติดตามเพื่อเพิ่มประสิทธิภาพการขาย</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + นัดหมายกิจกรรมใหม่
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-semibold">ประเภท</th>
              <th className="px-4 py-3 font-semibold">หัวข้อกิจกรรม</th>
              <th className="px-4 py-3 font-semibold">วันที่</th>
              <th className="px-4 py-3 font-semibold">เวลา</th>
              <th className="px-4 py-3 font-semibold">ผู้รับผิดชอบ</th>
              <th className="px-4 py-3 font-semibold">สถานะ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {activities.map((act, i) => (
              <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    act.type === 'MEETING' ? 'bg-purple-950 text-purple-400 border border-purple-800/30' :
                    act.type === 'CALL' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/30' :
                    act.type === 'EMAIL' ? 'bg-blue-950 text-blue-400 border border-blue-800/30' :
                    'bg-amber-950 text-amber-400 border border-amber-800/30'
                  }`}>
                    {act.type}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-white">{act.subject}</td>
                <td className="px-4 py-3 text-slate-400">{act.date}</td>
                <td className="px-4 py-3 text-slate-400">{act.time}</td>
                <td className="px-4 py-3 text-slate-300">{act.owner}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                    act.status === 'เสร็จสิ้น' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/30' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {act.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
