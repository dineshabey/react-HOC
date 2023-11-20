import React, { useState } from 'react';

export default function CounterRP(prop) {
    const [count, setCounter] = useState(0);
    const handleCount = () => setCounter(count + 1);


    return (
        <div>  {prop.render(handleCount, count)} </div>
    );
}
