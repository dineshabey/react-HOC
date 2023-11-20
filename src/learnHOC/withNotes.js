import React from 'react';


//regular js function start with simpale latter (w)- Param is react component
export default function withNotes(WrappedComponent) {
    //React componets - Start with the Capital latter (W)
    function WithNotes() {

        const watIsReact = 'infor at react ';
        const isReactFramework = 'No';
        const whatWriteInReactPage = 'jsx Compnents';

        return <WrappedComponent
            watIsReact={watIsReact}
            isReactFramework={isReactFramework}
            whatWriteInReactPage={whatWriteInReactPage} />
    }

    return WithNotes;

}
