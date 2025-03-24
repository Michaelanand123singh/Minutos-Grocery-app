// app/category/page.tsx
import React from 'react';
import CategoryPage from '@/components/category/CategoryPage';
import { featuredCategories } from '@/components/data/featuredCategoriesData';
import { getSubcategoriesForCategory } from '@/components/data/subcategoriesData';


export default function CategoryDetailPage({ 
  params 
}: { 
  params: { categorySlug: string } 
}) {
  const category = featuredCategories.find(cat => cat.slug === params.categorySlug);

  if (!category) {
    return <div>Category not found</div>;
  }

  const enrichedCategory = {
    ...category,
    subcategories: getSubcategoriesForCategory(category.slug),
    description: `Explore our wide range of ${category.name}`
  };

  return <CategoryPage categories={[enrichedCategory]} />;
}