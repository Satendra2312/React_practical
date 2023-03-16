import { useState } from 'react';

const Counter = (props) => {

    const { className } = props;
    console.log(props);

    const [num, setNum] = useState(0);

    const handleAsyncCounter = () => {
        setTimeout(() => {
            setNum((prevState) => prevState + 1)
        }, 5000)
    }
    const handleSyncCounter = () => {
        setNum((prevState) => prevState + 1)
    }
    return (
        <div className={`card ${className}`}>
            <div style={{ fontSize: "26px" }}>{num}</div>
            <button onClick={handleSyncCounter}>Sync</button>
            <button onClick={handleAsyncCounter}>Async</button>
        </div>
    )
}
export default Counter;