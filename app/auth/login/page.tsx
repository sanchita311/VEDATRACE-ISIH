'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    UserName: '',
    password: '',
    User_type: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.status === 200) {
      toast.success('Login successful / लॉगिन सफल');
      router.push('/');
    } else {
      toast.error('Invalid credentials / अमान्य जानकारी');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <div className="max-w-md w-full shadow-xl p-8 rounded-md border border-green-700">
        <h1 className="text-3xl font-bold text-green-700 mb-2">VedaTrace</h1>
        <h2 className="text-lg font-medium mb-1">
          Login as user / उपयोगकर्ता लॉगिन
        </h2>
        <p className="mb-6 text-sm text-gray-700">
          Access herb traceability and user dashboard. <br /> उपयोगकर्ता डैशबोर्ड तक पहुंचें।
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="UserName" placeholder="Username / उपयोगकर्ता नाम" required onChange={handleChange} className="border p-2 w-full" />
          <input type="password" name="password" placeholder="Password / पासवर्ड" required onChange={handleChange} className="border p-2 w-full" />
          <select name="User_type" required onChange={handleChange} className="border p-2 w-full">
            <option value="">Select Role / भूमिका चुनें</option>
            <option value="Farmer">Farmer / किसान</option>
            <option value="Processor">Processor / प्रोसेसर</option>
            <option value="Tester">Tester / परीक्षक</option>
            <option value="Manufacturer">Manufacturer / निर्माता</option>
            <option value="Consumer">Consumer / उपभोक्ता</option>
          </select>
          <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded w-full">
            Login / लॉगिन करें
          </button>
        </form>
      </div>
    </div>
  );
}
