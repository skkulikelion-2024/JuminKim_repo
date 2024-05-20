import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState([]);
  const [value, setValue] = useState();
  const [cryp, setCryp] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
    setCryp(() => event.target.value / value);
  };
  const changeV = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      <div>
        <input
          value={money}
          onChange={onChange}
          type="text"
          placeholder="how much do you have?"
        ></input>
        <hr />
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={value} onChange={changeV}>
          <option selected="selected">choose one</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h4>You can buy {cryp} coins</h4>
    </div>
  );
}

export default App;
