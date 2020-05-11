import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

let middleware = applyMiddleware(thunkMiddleware);

if (process.env.NODE_ENV === "development") {
    middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
}

export const store = createStore(rootReducer, {}, middleware);

export default function configureStore() {
    return store;
}

export type AppDispatch = typeof store.dispatch;
