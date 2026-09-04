export default function TailwindIntro() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen space-y-8">
      {/* Title */}
      <div className="border-b border-slate-300 pb-4">
        <h1 className="text-3xl font-bold text-slate-800">Tailwind CSS Utility Fundamental</h1>
        <p className="text-slate-600">Panduan Visual Utility Dasar sebelum masuk Logiswift</p>
      </div>

      {/* Grid Container untuk demo styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Background Color dan Teks Color */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-indigo-600">1. Color & Background color</h2>
          <div className="bg-indigo-600 text-white p-2 rounded">Test untuk background indigo dengan teks putih</div>
          <p className="text-slate-600 text-sm">Mengatur warna latar belakang ('bg-*') dan warna teks itu bisa menggunakan ('text-*')</p>
        </div>

        {/* 2. Margin dan Padding */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-emerald-600">2. Margin & Padding</h2>
          <div className="bg-emerald-100 text-emerald-900 border p-4 m-2 rounded text-sm font-mono">Kotak ini menggunakan p-4 (padding) dan m-2 (margin)</div>
        </div>

        {/* 3. Flexbox */}
        <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm space-y-2">
          <h2 className="text-lg font-semibold text-cyan-600">3. Flexbox Layout</h2>
          <div className="flex items-center justify-between bg-slate-100 p-3 rounded border border-slate-300 text-xs font-menu">
            <span className="bg-cyan-600 text-white px-3 py-1 rounded">Flex Item 1</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded">Flex Item 1</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded">Flex Item 1</span>
          </div>
          <p className="text-xs text-slate-500">Flex items-center justify-between untuk meratakan elemen setara horizontal dan membaginya dengan rapi</p>
        </div>
      </div>
    </div>
  );
}
