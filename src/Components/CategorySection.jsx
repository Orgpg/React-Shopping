import React from "react";
import CategoryButton from "./CategoryButton";

const CategorySection = () => {
  const title = "Product Categories";

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <section id="category-section" className="p-10">
      <p className="text-sm  mb-3 font-bold text-gray-500 font-mono">{title}</p>
      <div className="flex overflow-scroll category-button-group">
        {/* <CategoryButton CategoryName="all" current={true} />
        <CategoryButton CategoryName="electronics" current={false} />
        <CategoryButton CategoryName="jewelery" current={false} />
        <CategoryButton CategoryName="men's clothing" current={false} /> */}
        <CategoryButton CategoryName="all" current={true} />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            CategoryName={category}
            current={false}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

// props - name={category}
// loop တိုင်းမှာ key လို : key={category}
// category-button-group က class name