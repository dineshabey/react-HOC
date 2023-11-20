import React, { useState } from 'react'

export default function HoverCounter({handleCount,count}) {
    // const [count, setCount] = React.useState(0);
    // const handleCount = () => {
    //     setCount(count + 1);
    // }
    return (
        <div
            onMouseOver={handleCount}
            style={{
                marginTop: '30px',
                width: '400px',
                height: '200px',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'teal',
                display: 'flex',
                justifyContent: 'center',
                color: 'white',
                fontSize: '30px',
            }}>
            Hover components {count}
        </div>
    )
}
