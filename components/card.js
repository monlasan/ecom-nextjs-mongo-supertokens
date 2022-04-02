import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Badge from './badge';

export default function Card({ image, title, price, link }) {
  return (
    <Link href={link || '/'}>
      <a className='card rounded-sm border border-gray-300 w-full hover:border-violet-600'>
        <Image
          src={image || 'https://unsplash.it/300'}
          width={400}
          height={400}
          className='hover:scale-105 duration-150'
          objectFit='cover'
          alt=''
        />
        <div className='mt-2 p-3'>
          <h2 className='text-xl mb-2 font-semibold'>
            {title || 'Lorem ipsum dolor sit amet.'}
          </h2>
          <Badge>Prix: {parseInt(price).toLocaleString() || '4,545'}F</Badge>
        </div>
      </a>
    </Link>
  );
}
