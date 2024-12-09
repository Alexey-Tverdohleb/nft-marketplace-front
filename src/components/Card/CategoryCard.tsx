import React from 'react';

type Props = {
  src: string;
  label: string;
};

function CategoryCard({ src, label }: Props) {
  return (
    <div className="p-0 lg:p-3 bg-white dark:bg-black-900 rounded-[32px] hover:scale-[102%] transition ease-in-out duration-300">
      <img src={`/images/categories/${src}`} alt="" className="w-full rounded-[32px]" />
      <h3 className="text-center mt-3 text-xl">{label}</h3>
    </div>
  );
}

export default CategoryCard;
