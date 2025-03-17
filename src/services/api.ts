// src/services/api.ts
import { SignupFormData } from '@/types';

const API_BASE_URL = 'https://bakcend-n9kq.onrender.com';

export const signupMerchant = async (formData: SignupFormData): Promise<any> => {
  const response = await fetch(`${API_BASE_URL}/User/Create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
  
  return data;
};