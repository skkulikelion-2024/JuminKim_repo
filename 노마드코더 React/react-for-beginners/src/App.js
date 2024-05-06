import { useState, useEffect } from 'react';
import styles from './App.module.css';

function Hello() {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  // const [showing, setShowing] = useState(false);
  // const onClick = () => setShowing((prev) => !prev);
  // return (
  //   <div>
  //     {showing ? <Hello /> : null}
  //     <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
  //   </div>
  // );
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log('i run only once');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log("i run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'keyword' & 'counter' change");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
