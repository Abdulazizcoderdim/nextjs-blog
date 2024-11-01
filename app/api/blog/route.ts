import { BlogPost } from '@/types';
import { NextResponse } from 'next/server';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'My First Post',
    content: 'Lorem ',
    author: 'John Doe',
    img: '/logo.png',
  },
  {
    id: 2,
    title: 'My Second Post',
    content: 'This is my 2 post.',
    author: 'Jane Ali',
    img: '/logo.png',
  },
  {
    id: 3,
    title: 'My Second Post',
    content: 'This is my 3 post.',
    author: 'Jane Ali',
    img: '/logo.png',
  },
  {
    id: 4,
    title: 'My Second Post',
    content: 'This is my 4 post.',
    author: 'Jane Ali',
    img: '/logo.png',
  },
];

export async function GET(request: Request) {
  return NextResponse.json(
    {
      data: blogPosts,
    },
    {
      status: 200,
    }
  );
}
