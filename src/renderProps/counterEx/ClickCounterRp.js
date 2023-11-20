import React from 'react'

export default function ClickCounterRp({ handleCount, count }) {
    // const [count, setCounter] = React.useState(0);
    // const handleCount = () => setCounter(count + 1);
    return (
        <div>
            <button onClick={() => handleCount()} style={{ fontSize: '50px' }}>Click {count}</button>
        </div>
    )
}
