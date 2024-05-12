import PostList from "./features/post/PostList"
import AddPostForm from "./features/post/AddPostForm"

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center p-4 bg-[#f5f5f5]">
      <AddPostForm/>
      <PostList/>
    </main>
  )
}

export default App
