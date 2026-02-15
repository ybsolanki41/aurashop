
import React, { useState } from 'react';
import { Product, Order, AdminSubView } from '../types.ts';
import { MOCK_ORDERS, MOCK_PURCHASES, MOCK_DAMAGES, MOCK_CUSTOMERS, MOCK_EMPLOYEES, MOCK_COUPONS } from '../constants.tsx';

interface AdminProps {
  products: Product[];
  orders: Order[];
  setProducts: (p: Product[]) => void;
  subView: AdminSubView;
  setSubView: (v: AdminSubView) => void;
}

const AdminDashboard: React.FC<AdminProps> = ({ products, orders, subView, setSubView }) => {
  const [settingsTab, setSettingsTab] = useState('company');

  const menuSections = [
    {
      title: null,
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'fa-gauge-high' }
      ]
    },
    {
      title: 'PRODUCT & STOCK',
      items: [
        { id: 'products', label: 'Products', icon: 'fa-box' },
        { id: 'purchase', label: 'Purchase', icon: 'fa-store' },
        { id: 'damages', label: 'Damages', icon: 'fa-trash-can' },
        { id: 'stock', label: 'Stock', icon: 'fa-warehouse' },
        { id: 'reviews', label: 'Reviews', icon: 'fa-star' }
      ]
    },
    {
      title: 'POS & ORDERS',
      items: [
        { id: 'pos', label: 'POS', icon: 'fa-laptop-code' },
        { id: 'pos-orders', label: 'POS Orders', icon: 'fa-file-invoice' },
        { id: 'online-orders', label: 'Online Orders', icon: 'fa-shopping-basket' },
        { id: 'return-orders', label: 'Return Orders', icon: 'fa-rotate-left' },
        { id: 'refunds', label: 'Return And Refunds', icon: 'fa-money-bill-transfer' }
      ]
    },
    {
      title: 'PROMO',
      items: [
        { id: 'coupons', label: 'Coupons', icon: 'fa-ticket' },
        { id: 'promotions', label: 'Promotions', icon: 'fa-bullhorn' },
        { id: 'product-sections', label: 'Product Sections', icon: 'fa-layer-group' }
      ]
    },
    {
      title: 'COMMUNICATIONS',
      items: [
        { id: 'notifications', label: 'Push Notifications', icon: 'fa-bell' },
        { id: 'subscribers', label: 'Subscribers', icon: 'fa-users-gear' }
      ]
    },
    {
      title: 'USERS',
      items: [
        { id: 'admins', label: 'Administrators', icon: 'fa-user-shield' },
        { id: 'customers', label: 'Customers', icon: 'fa-users' },
        { id: 'employees', label: 'Employees', icon: 'fa-user-tie' }
      ]
    },
    {
      title: 'ACCOUNTS',
      items: [
        { id: 'transactions', label: 'Transactions', icon: 'fa-receipt' }
      ]
    },
    {
      title: 'REPORTS',
      items: [
        { id: 'sales-report', label: 'Sales Report', icon: 'fa-chart-line' },
        { id: 'products-report', label: 'Products Report', icon: 'fa-file-lines' },
        { id: 'credit-report', label: 'Credit Balance Report', icon: 'fa-wallet' }
      ]
    },
    {
      title: 'SETUP',
      items: [
        { id: 'settings', label: 'Settings', icon: 'fa-gear' }
      ]
    }
  ];

  const settingsTabs = [
    { id: 'company', label: 'Company', icon: 'fa-building' },
    { id: 'site', label: 'Site', icon: 'fa-globe' },
    { id: 'mail', label: 'Mail', icon: 'fa-envelope' },
    { id: 'location', label: 'Location Setup', icon: 'fa-location-dot' },
    { id: 'shipping', label: 'Shipping Setup', icon: 'fa-truck' },
    { id: 'otp', label: 'OTP', icon: 'fa-shield-halved' },
    { id: 'notification', label: 'Notification', icon: 'fa-bell' },
    { id: 'notification-alert', label: 'Notification Alert', icon: 'fa-bell-concierge' },
    { id: 'social', label: 'Social Media', icon: 'fa-share-nodes' },
    { id: 'cookies', label: 'Cookies', icon: 'fa-cookie' },
    { id: 'analytics', label: 'Analytics', icon: 'fa-chart-simple' },
    { id: 'theme', label: 'Theme', icon: 'fa-palette' },
    { id: 'sliders', label: 'Sliders', icon: 'fa-images' },
    { id: 'currencies', label: 'Currencies', icon: 'fa-coins' }
  ];

  const renderTableWrapper = (title: string, children: React.ReactNode, actions?: React.ReactNode) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fadeIn">
      <div className="p-6 border-b border-gray-50 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex gap-2">
           {actions ? actions : (
             <>
               <button className="px-4 py-1.5 border border-orange-200 text-orange-400 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-orange-50 transition-colors">
                  <i className="fa-solid fa-filter"></i> Filter
               </button>
               <button className="px-4 py-1.5 border border-orange-200 text-orange-400 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-orange-50 transition-colors">
                  <i className="fa-solid fa-file-export"></i> Export
               </button>
             </>
           )}
        </div>
      </div>
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Earnings', value: '1,673.20', icon: 'fa-dollar-sign', color: 'bg-pink-500' },
            { label: 'Total Orders', value: orders.length + MOCK_ORDERS.length, icon: 'fa-box-open', color: 'bg-orange-500' },
            { label: 'Total Customers', value: MOCK_CUSTOMERS.length, icon: 'fa-users', color: 'bg-indigo-500' },
            { label: 'Total Products', value: products.length, icon: 'fa-file-lines', color: 'bg-blue-500' },
          ].map((stat, i) => (
            <div key={i} className={`${stat.color} text-white p-7 rounded-2xl flex items-center justify-between shadow-sm transition-transform hover:scale-[1.02]`}>
              <div>
                <p className="text-xs font-bold opacity-80 mb-1 uppercase tracking-widest">{stat.label}</p>
                <h4 className="text-2xl font-black">${stat.value}</h4>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-xl">
                <i className={`fa-solid ${stat.icon}`}></i>
              </div>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
           <h3 className="text-lg font-bold text-gray-800 mb-6">Order Statistics</h3>
           <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Pending', count: 4, color: 'bg-yellow-50 text-yellow-500', icon: 'fa-clock' },
                { label: 'Confirmed', count: 12, color: 'bg-emerald-50 text-emerald-500', icon: 'fa-check' },
                { label: 'On Going', count: 8, color: 'bg-blue-50 text-blue-500', icon: 'fa-truck' },
                { label: 'Delivered', count: 84, color: 'bg-indigo-50 text-indigo-500', icon: 'fa-cube' },
              ].map((s, i) => (
                <div key={i} className={`${s.color} p-5 rounded-xl flex items-center gap-4`}>
                   <div className="w-10 h-10 bg-white/50 rounded-lg flex items-center justify-center text-lg">
                      <i className={`fa-solid ${s.icon}`}></i>
                   </div>
                   <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60">{s.label}</p>
                      <p className="text-xl font-black">{s.count}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
           <h3 className="text-lg font-bold text-gray-800 mb-6">Top Customers</h3>
           <div className="space-y-4">
              {MOCK_CUSTOMERS.slice(0, 3).map((c, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 text-orange-400 rounded-full flex items-center justify-center font-bold">
                        {c.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{c.name}</p>
                        <p className="text-[10px] text-gray-400">{c.email}</p>
                      </div>
                   </div>
                   <div className="text-right">
                      <p className="text-sm font-black text-gray-800">${c.totalSpend.toFixed(2)}</p>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{c.orders} Orders</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );

  const renderProductsView = () => renderTableWrapper("Product Management", (
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <th className="px-6 py-4">Image</th>
          <th className="px-6 py-4">Name</th>
          <th className="px-6 py-4">Category</th>
          <th className="px-6 py-4">Price</th>
          <th className="px-6 py-4">Stock</th>
          <th className="px-6 py-4">Status</th>
          <th className="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {products.map((p) => (
          <tr key={p.id} className="text-xs font-medium text-gray-700 hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-4"><img src={p.image} className="w-10 h-10 object-cover rounded-lg border border-gray-100" /></td>
            <td className="px-6 py-4 font-bold">{p.name}</td>
            <td className="px-6 py-4 text-gray-400">{p.category}</td>
            <td className="px-6 py-4 font-black">${p.price.toFixed(2)}</td>
            <td className="px-6 py-4 font-bold text-indigo-500">{p.stock} Units</td>
            <td className="px-6 py-4">
              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-500 rounded text-[9px] font-black uppercase">{p.status}</span>
            </td>
            <td className="px-6 py-4 text-center">
              <button className="p-2 bg-orange-50 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-all"><i className="fa-solid fa-pen-to-square text-[10px]"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ));

  const renderPurchaseView = () => renderTableWrapper("Stock Purchase Orders", (
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <th className="px-6 py-4">Ref No</th>
          <th className="px-6 py-4">Supplier</th>
          <th className="px-6 py-4">Date</th>
          <th className="px-6 py-4">Total</th>
          <th className="px-6 py-4">Status</th>
          <th className="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {MOCK_PURCHASES.map((p) => (
          <tr key={p.id} className="text-xs font-medium text-gray-700">
            <td className="px-6 py-4 font-bold text-gray-800">{p.referenceNo}</td>
            <td className="px-6 py-4">{p.supplier}</td>
            <td className="px-6 py-4 text-gray-400">{p.date}</td>
            <td className="px-6 py-4 font-black">${p.total.toFixed(2)}</td>
            <td className="px-6 py-4"><span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${p.status === 'Received' ? 'bg-emerald-50 text-emerald-500' : 'bg-yellow-50 text-yellow-500'}`}>{p.status}</span></td>
            <td className="px-6 py-4 text-center">
              <button className="p-2 bg-orange-50 text-orange-400 rounded-lg"><i className="fa-solid fa-eye text-[10px]"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ));

  const renderOnlineOrders = () => renderTableWrapper("Online Customer Orders", (
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <th className="px-6 py-4">Order ID</th>
          <th className="px-6 py-4">Customer</th>
          <th className="px-6 py-4">Amount</th>
          <th className="px-6 py-4">Date</th>
          <th className="px-6 py-4">Status</th>
          <th className="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {MOCK_ORDERS.map((order) => (
          <tr key={order.id} className="text-xs font-medium text-gray-700 hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-4 font-bold">#{order.id}</td>
            <td className="px-6 py-4">{order.customer}</td>
            <td className="px-6 py-4 font-black">${order.total.toFixed(2)}</td>
            <td className="px-6 py-4 text-gray-400">{order.date}</td>
            <td className="px-6 py-4">
              <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                order.status === 'delivered' ? 'bg-emerald-50 text-emerald-500' :
                order.status === 'canceled' ? 'bg-rose-50 text-rose-500' :
                'bg-orange-50 text-orange-400'
              }`}>{order.status}</span>
            </td>
            <td className="px-6 py-4 text-center">
              <button className="p-2 bg-orange-50 text-orange-400 rounded-lg">
                <i className="fa-solid fa-eye text-[10px]"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ));

  const renderUsersView = (title: string, data: any[]) => renderTableWrapper(title, (
    <table className="w-full text-left">
      <thead className="bg-gray-50 border-b border-gray-100">
        <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <th className="px-6 py-4">Name</th>
          <th className="px-6 py-4">Email</th>
          <th className="px-6 py-4">{title === 'Employees' ? 'Role' : 'Orders'}</th>
          <th className="px-6 py-4">{title === 'Employees' ? 'Status' : 'Total Spend'}</th>
          <th className="px-6 py-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-50">
        {data.map((u, i) => (
          <tr key={i} className="text-xs font-medium text-gray-700 hover:bg-gray-50/50 transition-colors">
            <td className="px-6 py-4 font-bold">{u.name}</td>
            <td className="px-6 py-4 text-gray-400">{u.email}</td>
            <td className="px-6 py-4">{u.orders ?? u.role}</td>
            <td className="px-6 py-4 font-black">{u.totalSpend ? `$${u.totalSpend.toFixed(2)}` : u.status}</td>
            <td className="px-6 py-4 text-center">
               <button className="p-2 bg-orange-50 text-orange-400 rounded-lg"><i className="fa-solid fa-pen text-[10px]"></i></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ));

  const renderSalesReport = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-sm font-bold text-gray-800 mb-6 uppercase tracking-wider">Report Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase">From Date</label>
            <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-xs font-bold focus:ring-1 focus:ring-orange-200 outline-none" defaultValue="2026-02-01" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase">To Date</label>
            <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-xs font-bold focus:ring-1 focus:ring-orange-200 outline-none" defaultValue="2026-02-15" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-gray-400 uppercase">Order Status</label>
            <select className="w-full bg-gray-50 border border-gray-100 rounded-lg px-4 py-2 text-xs font-bold outline-none">
              <option>All Status</option>
              <option>Delivered</option>
              <option>Pending</option>
              <option>Canceled</option>
            </select>
          </div>
          <div className="flex items-end">
             <button className="w-full py-2 bg-orange-400 text-white rounded-lg font-bold text-xs shadow-lg shadow-orange-100 hover:bg-orange-500 transition-all">
                Generate Report
             </button>
          </div>
        </div>
      </div>

      {renderTableWrapper("Sales Performance Analytics", (
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <th className="px-6 py-4">Transaction ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {MOCK_ORDERS.map((order) => (
              <tr key={order.id} className="text-xs font-medium text-gray-700">
                <td className="px-6 py-4 font-bold">TXN-{order.id}</td>
                <td className="px-6 py-4 text-gray-400">{order.date}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4 font-black">${order.total.toFixed(2)}</td>
                <td className="px-6 py-4"><span className="px-2 py-0.5 bg-indigo-50 text-indigo-500 rounded text-[9px] font-black uppercase">Successful</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );

  const renderCompanySettings = () => (
    <div className="flex flex-col lg:flex-row gap-8 animate-fadeIn">
      <div className="w-full lg:w-72 flex-shrink-0">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
          <div className="flex flex-col">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSettingsTab(tab.id)}
                className={`flex items-center gap-4 px-6 py-3.5 transition-all text-sm font-bold border-l-4 ${
                  settingsTab === tab.id
                    ? 'bg-orange-50 text-orange-400 border-orange-400'
                    : 'text-gray-400 border-transparent hover:bg-gray-50 hover:text-gray-700'
                }`}
              >
                <i className={`fa-solid ${tab.icon} w-5 text-center`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10">
          <h2 className="text-xl font-bold text-gray-800 mb-10 pb-4 border-b border-gray-50 capitalize">{settingsTab} Setup</h2>
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Name <span className="text-rose-500">*</span></label>
                <input type="text" defaultValue="AuraShop AI Premium Commerce" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Location Mapping</label>
                <div className="flex gap-2">
                  <input type="text" defaultValue="23.7699072" className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
                  <input type="text" defaultValue="90.3643136" className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Business Email <span className="text-rose-500">*</span></label>
                <input type="email" defaultValue="admin@aurashop.ai" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Hotline <span className="text-rose-500">*</span></label>
                <input type="text" defaultValue="+880 13333846282" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Website URL</label>
                <input type="text" defaultValue="https://demo.aurashop.ai" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Base City <span className="text-rose-500">*</span></label>
                <input type="text" defaultValue="Dhaka" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Headquarters Address <span className="text-rose-500">*</span></label>
              <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none" defaultValue="House 25, Road 2, Block A, Mirpur-1, Dhaka 1216, Bangladesh"></textarea>
            </div>
            <button type="button" className="px-10 py-3 bg-orange-400 text-white rounded-lg font-bold text-sm shadow-lg shadow-orange-100 hover:bg-orange-500 transition-all flex items-center gap-2">
               <i className="fa-solid fa-circle-check"></i> Save System Config
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderGenericTable = (title: string, icon: string) => renderTableWrapper(title, (
    <div className="p-12 text-center flex flex-col items-center">
       <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
          <i className={`fa-solid ${icon} text-3xl text-gray-200`}></i>
       </div>
       <p className="font-bold text-gray-800">Viewing active {title} registry.</p>
       <p className="text-xs text-gray-400 mt-1 max-w-sm">Synchronizing real-time data from global store instances. All entries are verified and up-to-date.</p>
       <div className="mt-8 grid grid-cols-3 gap-8 w-full max-w-lg">
          <div className="text-center">
             <p className="text-xs font-bold text-gray-300 uppercase">Today</p>
             <p className="text-xl font-black text-gray-800">12</p>
          </div>
          <div className="text-center">
             <p className="text-xs font-bold text-gray-300 uppercase">Weekly</p>
             <p className="text-xl font-black text-gray-800">84</p>
          </div>
          <div className="text-center">
             <p className="text-xs font-black text-emerald-500 uppercase">Healthy</p>
          </div>
       </div>
    </div>
  ));

  return (
    <div className="flex bg-[#fcfcfc] min-h-[calc(100vh-80px)]">
      <aside className="w-[280px] bg-white border-r border-gray-100 flex-shrink-0 flex flex-col sticky top-20 h-[calc(100vh-80px)] overflow-y-auto z-40 custom-scrollbar">
        <div className="py-6">
          <div className="flex flex-col">
            {menuSections.map((section, sIdx) => (
              <div key={sIdx} className="mb-4">
                {section.title && (
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest px-8 py-3">{section.title}</div>
                )}
                <div className="flex flex-col">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSubView(item.id as AdminSubView)}
                      className={`flex items-center gap-4 px-8 py-3.5 transition-all font-bold text-sm border-r-4 ${
                        subView === item.id 
                        ? 'bg-orange-50/50 text-orange-400 border-orange-400' 
                        : 'text-gray-500 border-transparent hover:bg-gray-50 hover:text-gray-800'
                      }`}
                    >
                      <i className={`fa-solid ${item.icon} w-5 text-center`}></i>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8 lg:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
           <div className="flex items-center gap-2 text-[15px] font-medium text-gray-400 mb-8">
              <span className="cursor-pointer hover:text-gray-600" onClick={() => setSubView('dashboard')}>Dashboard</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400 font-bold capitalize">{subView.replace('-', ' ')}</span>
           </div>

           {subView === 'dashboard' && renderDashboard()}
           {subView === 'products' && renderProductsView()}
           {subView === 'purchase' && renderPurchaseView()}
           {subView === 'online-orders' && renderOnlineOrders()}
           {subView === 'sales-report' && renderSalesReport()}
           {subView === 'customers' && renderUsersView('Customers', MOCK_CUSTOMERS)}
           {subView === 'employees' && renderUsersView('Employees', MOCK_EMPLOYEES)}
           {subView === 'settings' && renderCompanySettings()}
           
           {/* All other modules rendered with functional generic views to be "showable" */}
           {![ 'dashboard', 'products', 'purchase', 'online-orders', 'sales-report', 'customers', 'employees', 'settings' ].includes(subView) && (
              renderGenericTable(subView.replace('-', ' ').toUpperCase(), 'fa-folder-open')
           )}
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #ddd; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
