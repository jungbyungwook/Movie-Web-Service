import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = () => {
        setCounter((prev) => prev + 1);
    };
    const onChange = (event) => {
        setKeyword(event.target.value);
    };

    useEffect(() => {
        console.log("i run only once.");
    }, []);
    useEffect(() => {
        // if (keyword !== "" && keyword.length > 5) {
        //     console.log(`Search for ${keyword}`);
        // }
        console.log("i run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
        console.log("i run when 'counter' changes.");
    }, [counter]);
    useEffect(() => {
        console.log("i run when keyword & counter changes.");
    }, [keyword, counter]);

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="Seacrch here..."
            />
            <h1 className={styles.title}>{counter}</h1>
            {/* <Button text="Continue" /> */}
            <button onClick={onClick}>Click me</button>
        </div>
    );
}

export default App;
