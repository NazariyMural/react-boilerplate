import { combineReducers } from "redux";
import auth from "../app/Auth/reducer";

const rootReducer = combineReducers({
    auth,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
