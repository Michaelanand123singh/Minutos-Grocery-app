export interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    businessName: string;
    businessType: string;
    streetAddress: string;
    city: string;
    state: string;
    pinCode: string;
    nominateForAwards: boolean;
    acceptMessages: boolean;
  }

  // types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string;
  date: string;
  time: string;
  cost: string;
  status: 'Delivered' | 'Processing' | 'Cancelled';
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}
