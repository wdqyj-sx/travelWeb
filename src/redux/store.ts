import {createStore} from "redux"
import languageRedux from "./language/languageRedux";

const store = createStore(languageRedux);

export type rootStore = ReturnType<typeof store.getState>
export default store;
