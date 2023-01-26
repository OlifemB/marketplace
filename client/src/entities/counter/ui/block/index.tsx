import React from 'react';
import {Button} from "@/shared/ui/components";

type CountTypeProps = {
    count: number
    increment?: () => any,
    decrement?: () => any
}

const Count = ({count, increment, decrement}: CountTypeProps) => {
    return (
        <div>
            <h2>{count}</h2>
            <Button onClick={increment}> Increment </Button>
            <Button onClick={decrement}> Decrement </Button>
        </div>
    );
};

export default Count;