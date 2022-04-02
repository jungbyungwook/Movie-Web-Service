import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
        console.log("on useEffect");
    }, []);

    const onBlur = (event) => {
        setMoney(event.target.value);
    };

    const onClickBtn = (event) => {
        console.log(money);
    };

    // function

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`} </h1>

            <div>
                <input onBlur={onBlur} placeholder="금액을 입력해주세요." />
                <button onClick={onClickBtn}>입력</button>
            </div>

            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <ol>
                    {coins
                        .filter((coin) => money >= coin.quotes.USD.price)
                        .map((coin) => (
                            <li key={coin.id}>
                                {coin.name} ({coin.symbol}) : $
                                {coin.quotes.USD.price.toFixed(2)} USD{" "}
                                {(money / coin.quotes.USD.price).toFixed(2)}{" "}
                                개를 가질수있습니다.
                            </li>
                        ))}

                    {/* {coins.map((coin) => (
                    <option key={coin.id}>
                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}{" "}
                        USD
                    </option>
                ))} */}
                </ol>
            )}
        </div>
    );
}

export default App;
