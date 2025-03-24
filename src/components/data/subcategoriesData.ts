// components/data/subcategoriesData.ts

export interface Subcategory {
    id: string;
    name: string;
    slug: string;
  }
  
  export const subcategoriesData: { [key: string]: Subcategory[] } = {
    'paan-corner': [
      { id: 'pan-masala', name: 'Pan Masala', slug: 'pan-masala' },
      { id: 'gutka', name: 'Gutka', slug: 'gutka' },
    ],
    'dairy-bread-eggs': [
      { id: 'milk', name: 'Milk', slug: 'milk' },
      { id: 'bread', name: 'Bread', slug: 'bread' },
      { id: 'eggs', name: 'Eggs', slug: 'eggs' },
    ],
    'fruits-vegetables': [
      { id: 'fresh-fruits', name: 'Fresh Fruits', slug: 'fresh-fruits' },
      { id: 'fresh-vegetables', name: 'Fresh Vegetables', slug: 'fresh-vegetables' },
    ],
    'cold-drinks-juices': [
      { id: 'soft-drinks', name: 'Soft Drinks', slug: 'soft-drinks' },
      { id: 'fresh-juices', name: 'Fresh Juices', slug: 'fresh-juices' },
    ],
    'snacks-munchies': [
      { id: 'chips', name: 'Chips', slug: 'chips' },
      { id: 'namkeen', name: 'Namkeen', slug: 'namkeen' },
    ],
    'breakfast-instant-food': [
      { id: 'instant-noodles', name: 'Instant Noodles', slug: 'instant-noodles' },
      { id: 'breakfast-cereals', name: 'Breakfast Cereals', slug: 'breakfast-cereals' },
    ],
    'sweet-tooth': [
      { id: 'chocolates', name: 'Chocolates', slug: 'chocolates' },
      { id: 'candies', name: 'Candies', slug: 'candies' },
    ],
    'bakery-biscuits': [
      { id: 'cookies', name: 'Cookies', slug: 'cookies' },
      { id: 'bread', name: 'Bread', slug: 'bread' },
    ],
    'tea-coffee-health-drink': [
      { id: 'tea', name: 'Tea', slug: 'tea' },
      { id: 'coffee', name: 'Coffee', slug: 'coffee' },
      { id: 'health-drinks', name: 'Health Drinks', slug: 'health-drinks' },
    ],
    'atta-rice-dal': [
      { id: 'atta', name: 'Atta', slug: 'atta' },
      { id: 'rice', name: 'Rice', slug: 'rice' },
      { id: 'dal', name: 'Dal', slug: 'dal' },
    ],
  };
  
  // Helper function to get subcategories
  export function getSubcategoriesForCategory(categorySlug: string): Subcategory[] {
    return subcategoriesData[categorySlug] || [];
  }