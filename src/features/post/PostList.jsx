import { selectAllPosts } from "./postSlice";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
 const posts = useSelector(selectAllPosts);
 const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

 const renderedPosts = orderedPosts.map(post =>(
    <article key={post.id} className="bg-white border-[1px] border-black border-opacity-15 p-4 rounded-md" >
        <h3 className="font-bold text-xl" >{post.title}</h3>
        <p className="font-serif opacity-70 text-lg">{post.content}</p>
        <p>
          by <PostAuthor userId={post.userId}/> <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post}/>
    </article>
 ))

  return (
    <section className="flex flex-col gap-2">
        <h2 className="text-5xl font-bold mb-4">News</h2>
        {renderedPosts}
    </section>
  )
}

export default PostList