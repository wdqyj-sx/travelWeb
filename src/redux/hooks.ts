import { useSelector as useReduxSelect,TypedUseSelectorHook } from  "react-redux";

import { rootStore } from "./store"

export const useSelect:TypedUseSelectorHook<rootStore> = useReduxSelect;