
import { Category, Product, Purchase, Damage, Order } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Snapback Hat',
    price: 100.00,
    buyingPrice: 80.00,
    description: 'Premium adjustable snapback hat with embroidered logo.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80',
    category: Category.Men,
    rating: 4.8,
    stock: 108,
    status: 'Active',
    featured: true
  },
  {
    id: '2',
    name: 'Heritage 89',
    price: 80.00,
    buyingPrice: 60.00,
    description: 'Classic sports heritage cap.',
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=400&q=80',
    category: Category.Men,
    rating: 4.5,
    stock: 50,
    status: 'Active'
  },
  {
    id: '3',
    name: 'Dri-Fit Club Hat',
    price: 60.00,
    buyingPrice: 40.00,
    description: 'Moisture-wicking performance hat.',
    image: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=400&q=80',
    category: Category.Men,
    rating: 4.9,
    stock: 75,
    status: 'Active'
  },
  {
    id: '4',
    name: 'Nike Brasilia',
    price: 140.00,
    buyingPrice: 120.00,
    description: 'Durable backpack for training.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
    category: Category.Clothing,
    rating: 4.6,
    stock: 30,
    status: 'Active'
  },
  {
    id: '5',
    name: 'Jordan Retro 1 High',
    price: 160.00,
    buyingPrice: 140.00,
    description: 'Iconic high-top sneakers.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=400&q=80',
    category: Category.Hoodies,
    rating: 5.0,
    stock: 12,
    status: 'Active',
    featured: true
  }
];

export const MOCK_ORDERS: Order[] = [
  { id: '1502266', type: 'Delivery', items: [], total: 263.00, customer: 'John Doe', status: 'canceled', date: '15-02-2026', time: '01:36 PM' },
  { id: '2206253', type: 'Delivery', items: [], total: 278.00, customer: 'Will Smith', status: 'pending', date: '22-06-2025', time: '12:39 PM' },
  { id: '2206252', type: 'Delivery', items: [], total: 720.00, customer: 'Will Smith', status: 'delivered', date: '22-06-2025', time: '12:39 PM' },
  { id: '2206251', type: 'Delivery', items: [], total: 415.20, customer: 'Will Smith', status: 'delivered', date: '22-06-2025', time: '12:39 PM' }
];

export const MOCK_PURCHASES: Purchase[] = [
  { id: '1', supplier: 'Mr. Raj & DK', date: '22-06-2025', referenceNo: 'PUR-1013', status: 'Received', total: 56840.00, paymentStatus: 'Paid' },
  { id: '2', supplier: 'Md. Smith Pio', date: '22-06-2025', referenceNo: 'PUR-1012', status: 'Received', total: 32440.00, paymentStatus: 'Pending' },
  { id: '3', supplier: 'Global Trading Co.', date: '21-06-2025', referenceNo: 'PUR-1011', status: 'Pending', total: 12960.00, paymentStatus: 'Partial' }
];

export const MOCK_DAMAGES: Damage[] = [
  { id: '1', date: '22-06-2025', referenceNo: 'DMG-1003', total: 1100.00, note: 'Water damage in warehouse' },
  { id: '2', date: '20-06-2025', referenceNo: 'DMG-1002', total: 440.00, note: 'Expired stock' }
];

export const MOCK_CUSTOMERS = [
  { id: 'C001', name: 'Will Smith', email: 'will@example.com', phone: '+123456789', orders: 12, totalSpend: 2450.00 },
  { id: 'C002', name: 'John Doe', email: 'john@example.com', phone: '+987654321', orders: 5, totalSpend: 890.00 },
  { id: 'C003', name: 'Sarah Connor', email: 'sarah@example.com', phone: '+555444333', orders: 1, totalSpend: 150.00 },
];

export const MOCK_EMPLOYEES = [
  { id: 'E001', name: 'Kevin Durant', role: 'Sales Manager', email: 'kevin@shopperz.com', status: 'Active' },
  { id: 'E002', name: 'Kyrie Irving', role: 'Store Keeper', email: 'kyrie@shopperz.com', status: 'Active' },
  { id: 'E003', name: 'James Harden', role: 'Delivery Agent', email: 'james@shopperz.com', status: 'On Leave' },
];

export const MOCK_COUPONS = [
  { code: 'SUMMER25', discount: '25%', type: 'Percentage', expiry: '30-08-2026', status: 'Active' },
  { code: 'WELCOME50', discount: '$50', type: 'Fixed', expiry: '31-12-2026', status: 'Active' },
];
