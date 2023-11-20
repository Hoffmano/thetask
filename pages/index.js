import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const { data } = fetch('/api/hello')
  const [items, setItems] = useState([''])
  const htmlItems = []
  const createItem = () => {
    if (items.slice(-1) == '') return
    setItems(array => [...array, ''])
  }  
  for (let item of items) {
    htmlItems.push((<>
      <div>
        <input type='checkbox'></input>
        <label contentEditable class="single-line" onInput={createItem} onChange={createItem}>{item}</label>
      </div>
    </>))
  }

  return (
    <div>
      <Head>
        <title>Tasks</title>
      </Head>
      <main>
        <h1>18/11</h1>
        {htmlItems.map((elem) => elem)}
        {data.tasks.map(task => (
          <p key={task.id}>task.title</p>
        ))}
      </main>
      <style jsx global>{`
        [contenteditable="true"].single-line {
          white-space: nowrap;
          width:200px;
          overflow: hidden;
        } 
        [contenteditable="true"].single-line br {
            display:none;
        }
        [contenteditable="true"].single-line * {
            display:inline;
            white-space:nowrap;
        }
      `}</style>
    </div>
  );
}
