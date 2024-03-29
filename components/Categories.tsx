import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((category) => setCategories(category));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category: any) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer mb-3 pb-3 block">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
