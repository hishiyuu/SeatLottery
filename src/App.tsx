

import { useState } from 'react'
import './App.css'

function App() {
  // 配列１と配列２の状態を定義
  const [array1, setArray1] = useState([1, 2, 3]);
  const [array2, setArray2] = useState([4, 5, 6]);

  // 配列１から要素を削除し、配列２に追加する関数
  const moveElement = () => {
    // 配列１が空でない場合
    if (array1.length > 0) {
      // 配列１の先頭の要素を取り出す
      const element = array1.shift();
      // 配列１の状態を更新する
      setArray1([...array1]);
      // 配列２に要素を追加する
      setArray2([...array2, element]);
    }
  };

  return (
    <div className="App">
      <h1>Reactで配列の要素を移動させる</h1>
      <button onClick={moveElement}>移動</button>
      <p>配列１：{JSON.stringify(array1)}</p>
      <p>配列２：{JSON.stringify(array2)}</p>
    </div>
  );
}

export default App
