import { PostData } from '../models/PostData';
type Props = { posts: PostData[] };

export function PostsList({ posts }: Props) {
  return (
    <ul className="list-none">
      {posts.map((post) => (
        <li key={post.id} className="border-b py-4">
          <h3 className="text-slate-900 font-bold"> {post.title} </h3>
          {post.title}
        </li>
      ))}
    </ul>
  );
}
