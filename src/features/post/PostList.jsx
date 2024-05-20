import { selectAllPosts, getPostError, getPostStatus, fetchPosts } from "./postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Post from "./Post";


const PostList = () => {
  const dispatch = useDispatch();

 const error = useSelector(getPostError);
 const status = useSelector(getPostStatus);
 const posts = useSelector(selectAllPosts);

 useEffect(()=>{
  if(status === 'idle'){
    dispatch(fetchPosts())
  }
 }, [status, dispatch])

 let content;
 if(status === 'loading'){
   content = <h3 className="text-xl text-center">Loading...</h3>
  }
  else if (status === 'succeeded'){
   const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));
   content = orderedPosts.map(post =>(<Post post= {post} key={post.id} />))
 }
 else if(status === 'failed') {
  content = <h3 className="text-xl text-center">{error}</h3>
 }
 else content = null;

  return (
    <section className="flex flex-col gap-2">
        <h2 className="text-5xl font-bold mb-4">News</h2>
        {content}
    </section>
  )
}

export default PostList