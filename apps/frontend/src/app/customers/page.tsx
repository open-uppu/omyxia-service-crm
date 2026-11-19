export default function CustomersPage() {
  const customers = [
    { code: 'CUST-001', name: 'บริษัท สยาม รีเทล คอร์ปอเรชั่น จำกัด', industry: 'Retail / Department Store', creditLimit: '฿ 3,000,000', terms: '45 วัน', activeDeals: 2 },
    { code: 'CUST-002', name: 'บริษัท เทค สมาร์ท จำกัด', industry: 'Information Technology', creditLimit: '฿ 1,500,000', terms: '30 วัน', activeDeals: 1 },
    { code: 'CUST-003', name: 'บริษัท อัลฟ่า พรีเมียม จำกัด', industry: 'Manufacturing & Export', creditLimit: '฿ 5,000,000', terms: '60 วัน', activeDeals: 3 },
    { code: 'CUST-004', name: 'ไทย เมดิคอล ซัพพลาย จำกัด', industry: 'Healthcare & Supplies', creditLimit: '฿ 2,000,000', terms: '30 วัน', activeDeals: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">ข้อมูลลูกค้าและคู่ค้าหลัก (Customer Accounts)</h2>
          <p className="text-xs text-slate-400 mt-1">ทะเบียนประวัติลูกค้า วงเงินสินเชื่อ และดีลที่กำลังดำเนินการ</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow transition-colors">
          + เพิ่มข้อมูลลูกค้า
        </button>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-900 border-b border-slate-800 text-slate-400">
            <tr>
              <th className="px-4 py-3 font-semibold">รหัสลูกค้า</th>
              <th className="px-4 py-3 font-semibold">ชื่อบริษัท / องค์กร</th>
              <th className="px-4 py-3 font-semibold">กลุ่มธุรกิจ</th>
              <th className="px-4 py-3 font-semibold">วงเงินสินเชื่อ</th>
              <th className="px-4 py-3 font-semibold">เครดิตเทอม</th>
              <th className="px-4 py-3 font-semibold">ดีลที่กำลังดำเนิน</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {customers.map((c, i) => (
              <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-4 py-3 font-mono font-medium text-slate-300">{c.code}</td>
                <td className="px-4 py-3 font-medium text-white">{c.name}</td>
                <td className="px-4 py-3 text-slate-400">{c.industry}</td>
                <td className="px-4 py-3 font-mono font-semibold text-indigo-400">{c.creditLimit}</td>
                <td className="px-4 py-3 text-slate-300">{c.terms}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-950 text-indigo-400 border border-indigo-800/30">
                    {c.activeDeals} ดีล
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
