
export enum Category {
  Men = 'Men',
  Clothing = 'Clothing',
  Hoodies = 'Hoodies & Sw',
  Jackets = 'Jackets & Vests',
  Pants = 'Pants & Tights',
  Shorts = 'Shorts'
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  buyingPrice: number;
  description: string;
  image: string;
  category: Category;
  rating: number;
  stock: number;
  status: 'Active' | 'Inactive';
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  type: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'ongoing' | 'delivered' | 'canceled' | 'returned' | 'rejected';
  customer: string;
  date: string;
  time?: string;
}

export interface Purchase {
  id: string;
  supplier: string;
  date: string;
  referenceNo: string;
  status: 'Received' | 'Pending' | 'Ordered';
  total: number;
  paymentStatus: 'Paid' | 'Pending' | 'Partial';
}

export interface Damage {
  id: string;
  date: string;
  referenceNo: string;
  total: number;
  note: string;
}

export type AdminSubView = 
  | 'dashboard' 
  | 'products' | 'purchase' | 'damages' | 'stock' | 'reviews' 
  | 'pos' | 'pos-orders' | 'online-orders' | 'return-orders' | 'refunds'
  | 'coupons' | 'promotions' | 'product-sections'
  | 'notifications' | 'subscribers'
  | 'admins' | 'customers' | 'employees'
  | 'transactions'
  | 'sales-report' | 'products-report' | 'credit-report'
  | 'settings' | 'profile';

export interface AppState {
  view: 'home' | 'shop' | 'cart' | 'admin' | 'login';
  adminSubView: AdminSubView;
  selectedProductId?: string;
  language: string;
}
