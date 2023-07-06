import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incCount = () => { 
        setCount(count + 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={ incCount }>Click me</button>
        </div>
    )
}