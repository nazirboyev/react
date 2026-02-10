import { useState } from "react";

function Home () {
    const [count, setCount] = useState(0)


    return(
        <>
        <div className="home-container">
            <h1>Home</h1>
            <h3>Count</h3>
            <p>{count}</p>
            <button onClick={() => setCount(0)} className="increment">+1</button>
            <button onClick={() => setCount(0)} className="decrement">-1</button>
        </div>      
        </>
    );
}

export default Home