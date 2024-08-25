const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [
    { id: 1, name: "sudhanshu" },
    { id: 2, name: "sloth" },
    { id: 3, name: "harki" },
  ],
};
// console.log(users);
const Slice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      //   console.log(users);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
    },
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
