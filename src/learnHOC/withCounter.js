import React, { useState } from 'react';

export default function withCounter(WrappedComponents) {
    function WithCounter() {
        const [count, setCount] = useState(0); 
        const handleCount = () => {
            setCount(count + 1);
        }
        return <WrappedComponents count={count} handleCount={handleCount} />;
    }

    return WithCounter;
}
