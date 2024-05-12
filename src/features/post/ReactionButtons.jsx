import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    heart: '💖',
    fire: '🔥',
    rocket: '🚀'
}

const ReactionButtons = ({post}) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji])=>{
        return (
            <button className="hover:bg-slate-200 px-2 py-1 rounded-lg flex items-center gap-1 " key={name} onClick={()=>dispatch(reactionAdded({postId: post.id, reaction:name}))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    })
  return (
    <div className="flex gap-2 items-center mt-4">
        {reactionButtons}
    </div>
  )
}

export default ReactionButtons