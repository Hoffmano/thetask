import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/hello');
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao chamar a API:', error);
      }
    }

    fetchData();
  }, []);

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
        <label contentEditable className="single-line" onInput={createItem} onChange={createItem}>{item}</label>
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
        {data.map(task => (<div>
          <input type='checkbox'></input>
          <label contentEditable className="single-line" onInput={createItem} onChange={createItem}>{task.title}</label>
        </div>
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
