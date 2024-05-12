import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content);

 const userOptions = users.map(user =>(
  <option value={user.id} key={user.id}>{user.name}</option>
 )
 )
  const handleSubmit = (e) => {
  e.preventDefault();
  if(title && content){
  dispatch(postAdded(title,content, userId))
  setTitle('');
  setContent('');
  setIsActive(false);
}
  }

  return (
    <>
    {isActive ? (<form  className='flex flex-col gap-1'>
      <h2 className="text-4xl font-bold mb-4 text-center">Post</h2>
      <input
        type="text"
        value={title}
        onChange={onTitleChanged}
        placeholder="Title"
        className='bg-white border-[1px] border-black border-opacity-15 p-4 rounded-md text-xl font-bold'
      />
      <select className='bg-white border-[1px] border-black border-opacity-15 p-4 rounded-md font-semibold text-xl opacity-80' value={userId} onChange={onAuthorChanged} id="postAuthor">
<option value="">Select Author</option>
{userOptions}
      </select>
      <textarea value={content} onChange={onContentChanged} placeholder='Tell your story...' className='bg-white border-[1px] border-black border-opacity-15 p-4 rounded-md text-lg font-serif' />
      <button disabled={!canSave} onClick={handleSubmit} className='rounded-lg border-2 border-black p-2  font-bold hover:bg-black hover:text-white'>Submit</button>
    </form>): <button onClick={()=>setIsActive(true)} className="rounded-lg border-2 border-black py-2 px-4 font-bold hover:bg-black hover:text-white">Add Post</button>}
    </>
    
  );
};

export default AddPostForm;
