import React from 'react'
import ParentN from './ParentN'
import ChildN from './ChildN'

export default function OuterN() {
    return (
        <div>
            OuterN
            <ParentN>
                <ChildN />
            </ParentN>
        </div>
    )
}
