import React, { useState } from 'react';

export const App = () => {
    const [state, setState] = useState(1);
    return (
        <>
            <button onClick={() => setState(state + 1)}>Add 1</button>
            <p>My future site</p>
            <div>{state}</div>
        </>
    );
};
