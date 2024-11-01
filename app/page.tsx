import PostCard from '@/components/blog/post-card';
import { BlogPost } from '@/types';

export default async function Home() {
  const blogPosts = await fetch(process.env.NEXT_PUBLIC_API_URL + '/blog');
  const posts = await blogPosts.json().then(res => res.data);
  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <main className="xl:px-36 p-6">
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="md:col-span-2 md:row-span-2">
          <PostCard post={firstPost} />
        </div>
        {restPosts.map((post: BlogPost) => {
          return (
            <>
              <PostCard post={post} key={post.id} />
            </>
          );
        })}
      </div>
    </main>
  );
}
