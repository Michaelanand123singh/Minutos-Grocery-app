// components/search-page/popularProductsData.ts

export interface Product {
    id: string;
    name: string;
    category: string;
    image: string;
    price: number;
    discountedPrice?: number;
    description?: string;
  }
  
  export const popularProductsData: Product[] = [
    {
      id: 'p1',
      name: 'Organic Face Cream',
      category: 'Beauty',
      image: 'https://via.placeholder.com/200x200?text=Face+Cream',
      price: 29.99,
      discountedPrice: 24.99,
      description: 'Nourishing organic face cream for all skin types'
    },
    {
      id: 'p2',
      name: 'Kitchen Essentials Set',
      category: 'Kitchen',
      image: 'https://via.placeholder.com/200x200?text=Kitchen+Set',
      price: 49.99,
      description: 'Complete kitchen cooking and preparation set'
    },
    {
      id: 'p3',
      name: 'Lifestyle Water Bottle',
      category: 'Accessories',
      image: 'https://via.placeholder.com/200x200?text=Water+Bottle',
      price: 19.99,
      description: 'Eco-friendly reusable water bottle'
    },
    {
      id: 'p4',
      name: 'Healthy Snack Pack',
      category: 'Snacks',
      image: 'https://via.placeholder.com/200x200?text=Snack+Pack',
      price: 14.99,
      description: 'Nutritious and delicious snack assortment'
    },
    {
      id: 'p5',
      name: 'Mobile Accessories Kit',
      category: 'Electronics',
      image: 'https://via.placeholder.com/200x200?text=Mobile+Kit',
      price: 39.99,
      description: 'Comprehensive mobile accessories bundle'
    }
  ];