import { useState } from 'react';
import { v4 } from 'uuid';
import styles from './App.module.css';
import reactLogo from './assets/react.svg';
import ListItem from './components/ListItem';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const addItem = () => {
    setInputText('');
    setItems([
      ...items,
      {
        id: v4(),
        content: inputText,
      },
    ]);
  };

  return (
    <div>
      <h1>
        <img className={styles.reactLogo} src={reactLogo} />
        To Do List
      </h1>
      <input
        className={styles.inputText}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className={styles.button} onClick={addItem}>
        Add
      </button>
      <br />
      <h2>Your List</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <ListItem
              content={item.content}
              onChange={(e) =>
                setItems((prev) =>
                  prev.map((element) => {
                    if (element.id === item.id)
                      return {
                        ...element,
                        content: e.target.value,
                      };
                    return element;
                  })
                )
              }
              deleteOnClick={() =>
                setItems((prev) =>
                  prev.filter((element) => element.id !== item.id)
                )
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
