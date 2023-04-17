import './App.css';
import React , {useState} from 'react';

function App() {
  const [newItem ,setNewITem]=useState("")
  const [items ,setItems]=useState([]);

  function addItem(){
    if(!newItem){
      alert("Kayıt Ekle")
      return;
    }
    const item= {
      id: Math.floor(Math.random()*1000),
      value:newItem
    }
    setItems(oldItems => [...oldItems, item])
  setNewITem("");
 
  }
  function deleteItem(id){
    const newArray=items.filter(item=>item.id !==id);
    setItems(newArray);

  }
  

  return (
    <div className="App">
      <h1>Listeler</h1>
      <input
      type='text'
      placeholder='Kayıt Ekle'
      value={newItem}
      onChange={e=>setNewITem(e.target.value)}
      />
      <button onClick={()=>addItem()}>EKLE</button>
      <ul>
        {items.map(item=>{
          return(
            <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>X</button> </li>
          )
        })}
      </ul>
      
    </div>
  );
}

export default App;
