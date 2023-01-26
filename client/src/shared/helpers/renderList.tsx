import React, {ReactNode} from "react";
import {JSXElement} from "@typescript-eslint/types/dist/generated/ast-spec";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function RenderList<T>(props: ListProps<T>): JSX.Element {
    return <>{props.items.map(props.renderItem)}</>
}

export default RenderList