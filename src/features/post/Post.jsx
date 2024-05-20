import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const Post = ({post}) => {
  
  return (
    <article className="max-w-[70ch] bg-white border-[1px] border-black border-opacity-15 p-4 rounded-md" >
        <h3 className="font-bold text-xl" >{post.title}</h3>
        <p className="font-serif opacity-70 text-lg">{post.body}</p>
        <p>
          by <PostAuthor userId={post.userId}/> <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post}/>
    </article>
  )
}

export default Post