import {TypedUseSelectorHook, useSelector,} from 'react-redux';
import {RootState} from "@/app/store/types";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;