import {bindActionCreators} from "redux";
import {AnyAction} from "@reduxjs/toolkit";
import {AppDispatch} from "@/app/store/types";

const useActions = (actions: any, dispatch: AppDispatch) => {
    return bindActionCreators({...actions}, dispatch)
};

export default useActions;