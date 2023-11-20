import React, { useState } from 'react'


export const useCounter = () => {
    const [count, setCount] = useState(0);
    const clickCount = () => setCount(count + 1);
    return [count, clickCount];
}