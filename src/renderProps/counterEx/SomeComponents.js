import React from 'react'
import ClickCounterRp from './ClickCounterRp'
import HoverCounter from './HoverCounter'
import CounterRP from './CounterRP'

export default function SomeComponents() {

    return (
        <div>
            {/* <ClickCounterRp />
            <HoverCounter/> */}

            <CounterRP render={(handleCount, count) => <ClickCounterRp handleCount={handleCount} count={count} />} />
            <CounterRP render={(handleCount, count) => <HoverCounter handleCount={handleCount} count={count} />} />

        </div>
    )

}
