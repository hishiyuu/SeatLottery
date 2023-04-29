import { useState } from 'react'
import './App.css'

// 配列をシャッフルする関数（Fisher-Yates shuffle）
function shuffle(array: Array<string>) {
  // 配列の末尾から先頭に向かって要素を入れ替える
  for (let i = array.length - 1; i > 0; i--) {
    // 0からiまでのランダムなインデックスを生成する
    const j = Math.floor(Math.random() * (i + 1));
    // i番目とj番目の要素を入れ替える
    [array[i], array[j]] = [array[j], array[i]];
  }
  // シャッフルされた配列を返す
  return array;
}

// データの配列
const data = ["A-1", "A-2", "A-3", "B-1", "B-2"];

// 配列をシャッフルする
const shuffledData = shuffle(data);

function App() {
  // 配列１と配列２の状態を定義
  const [array1, setArray1] = useState<Array<string>>(shuffledData);
  const [array2, setArray2] = useState<Array<string | undefined>>([]);

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
      <p>値: {array2[array2.length - 1]}</p>
      {/* <p>配列１：{JSON.stringify(array1)}</p> */}
      <p>配列２：{JSON.stringify(array2)}</p>
    </div>
  )
}

export default App