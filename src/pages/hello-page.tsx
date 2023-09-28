'use client';

import Link from 'next/link';
import React from 'react';

const Hello = () => {
  console.log('hello');

  return (
    <div>
      <Link href='/'>To home</Link>
      <div>hello</div>
    </div>
  );
};

export default Hello;
