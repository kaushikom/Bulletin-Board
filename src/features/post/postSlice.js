import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'Inkwell Insider',
    content:
      'Behind the scenes: How Bugs Bunny pull off his famous disappearing act.',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 1,
      heart: 3,
      fire: 2,
      rocket: 7,
    },
  },
  {
    id: '2',
    title: 'Paws & Claws',
    content:
      'Local celebrity cat, Mittens, wins "Best Purr-sonality" award at annual cat show',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 2,
      heart: 1,
      fire: 5,
      rocket: 3,
    },
  },
];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              heart: 0,
              fire: 0,
              rocket: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, reactionAdded } = postSlice.actions;
export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
