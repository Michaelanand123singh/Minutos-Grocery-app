"use client";

import React from 'react';
import Banner from '@/components/home/Banner';
import CategorySection from '@/components/home/CategorySection';
import { groceryKitchenItems } from '@/components/data/groceryKitchenData';
import { snacksDrinksItems } from '@/components/data/snacksDrinksData';
import { beautyPersonalCareItems } from '@/components/data/beautyPersonalCareData';
import { lifestyleItems } from '@/components/data/lifestyleData';
import { householdEssentialsItems } from '@/components/data/householdEssentialsData';
import { mobileAccessoriesItems } from '@/components/data/mobileAccessoriesData';

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-20 pb-8">
      {/* First Banner */}
      <Banner id="banner-1" />
      
      {/* Grocery & Kitchen Section */}
      <CategorySection 
        title="Grocery & Kitchen" 
        items={groceryKitchenItems} 
      />
      
      {/* Snacks & Drinks Section */}
      <CategorySection 
        title="Snacks & Drinks" 
        items={snacksDrinksItems} 
      />
      
      {/* Second Banner */}
      <Banner id="banner-2" />
      
      {/* Beauty & Personal Care Section */}
      <CategorySection 
        title="Beauty & Personal Care" 
        items={beautyPersonalCareItems} 
      />
      
      {/* Life Style Section */}
      <CategorySection 
        title="Life Style" 
        items={lifestyleItems} 
      />
      
      {/* Third Banner */}
      <Banner id="banner-3" />
      
      {/* Household Essentials Section */}
      <CategorySection 
        title="Household Essentials" 
        items={householdEssentialsItems} 
      />
      
      {/* Fourth Banner */}
      <Banner id="banner-4" />
      
      {/* Mobile Accessories Section */}
      <CategorySection 
        title="Mobile Accessories" 
        items={mobileAccessoriesItems} 
      />
    </main>
  );
}