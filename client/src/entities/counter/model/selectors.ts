import {useTypedSelector} from "@/shared/hooks/useTypedSelector";

export const useCount = () => useTypedSelector((store) => store.counter)