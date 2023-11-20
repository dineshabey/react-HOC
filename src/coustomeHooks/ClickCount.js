import React from 'react';
import { useCounter } from './useCounter';


export default function ClickCount() {
    // const [count, setCount] = React.useState(0);
    // const clickCount = () => setCount(count + 1);

    //use coustome hooks
    const [count, clickCount] = useCounter();


    return (
        <div>
            <button style={{ fontSize: '50px', marginTop: '20px' }} onClick={clickCount}>Click {count}</button>
        </div>
    )
}
