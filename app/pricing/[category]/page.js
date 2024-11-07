"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import packages from '@components/pricing/packages';
import PackageList from '@components/pricing/ui/packageList';

const PricingCategory = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (router.query) {
      const { category } = router.query;
      const data = packages[category];

      if (data) {
        setCategoryData(data);
        setTitle(titleMap[category]);
      }
      setLoading(false);
    }
  }, [router.query]);

  const titleMap = {
    socialMediaManagement: "Social Media Management",
    videoProduction: "Video Production",
    webAppDevelopment: "Web & App Development",
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!categoryData) {
    return <p>No data found for this category.</p>;
  }

  return <PackageList title={title} packages={categoryData} />;
};

export default PricingCategory;