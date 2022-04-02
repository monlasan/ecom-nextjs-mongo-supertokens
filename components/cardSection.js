import React from 'react';
import Card from './card';

export default function CardSection({ data, title }) {
  return (
    <section className='mb-12' id={title.split(' ').join('-').toLowerCase()}>
      <h1 className='text-3xl font-bold font-mono text-center'>{title}</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-6'>
        {data?.map(({ _id, title, price, category, image, slug }) => (
          <Card
            key={_id}
            title={title}
            price={price}
            category={category}
            image={image}
            link={`/${category.split(' ').join('-').toLowerCase()}/${slug}`}
          />
        ))}
      </div>
    </section>
  );
}
