import React from 'react'
import withCounter from '../learnHOC/withCounter';



function ClickComponents({count, handleCount}) {
    // const [count, setCount] = React.useState(0)
    // const handleClick = () => {
    //     setCount(count + 1);
    // }
    return (
        <div>
            <button type='button' style={{ fontSize:'30px' }} onClick={() => handleCount()}>Click count {count}</button>

        </div>
    )
}

export default withCounter(ClickComponents);