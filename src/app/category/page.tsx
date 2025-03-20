// app/category/page.tsx
"use client";

import React from 'react';
import Category from '@/components/category/CategoryPage';
import { featuredCategories } from '@/components/data/featuredCategoriesData';

export default function CategoryPageContainer() {
  return (
    <main className="container mx-auto px-4 pt-20 pb-8">
      <Category categories={featuredCategories} />
    </main>
  );
}