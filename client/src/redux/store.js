import { configureStore } from "@reduxjs/toolkit";
import { ArticleSlice} from "./slices/articleSlice";
import loginSlice from "./slices/loginSlice";


const store = configureStore({
  reducer: {
    login : loginSlice,
    articles : ArticleSlice.reducer
  },
  
});
export default store;