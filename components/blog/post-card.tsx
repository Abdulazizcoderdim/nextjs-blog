import { BlogPost } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

const PostCard = ({
  className,
  thumbnail,
  post,
}: {
  className?: string;
  thumbnail?: string;
  post: BlogPost;
}) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-col gap-y-2">
        {thumbnail ? (
          <Image
            src={post.img || '/no-thumbnail.jpg'}
            width={200}
            height={200}
            alt="thumbnail"
            className="w-full object-cover rounded-md"
          />
        ) : (
          <Image
            src={post.img || '/no-thumbnail.jpg'}
            width={200}
            height={200}
            alt="thumbnail"
            className="w-full object-cover rounded-md"
          />
        )}
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          {post.content.length > 100 ? (
            <>{post.content.slice(0, 100)}...</>
          ) : (
            <>{post.content}</>
          )}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link href="#">Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
