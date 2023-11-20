import './App.css';
import React, { useEffect, useState } from 'react';
import Profile from './components/Profile';


function App() {
  const Name = "Daffa surya arrayan";
  console.log(Name)
  const [Myangka , setMyangka] = useState(1);
  const [state, setState] = useState(); 

  const Handleinput = (e) => {
   setState(e.target.value)  // berfungsi untuk menjalankan input 
  }

  useEffect(() => {
   alert("Hayoo ngapain hayoo..")
  }, [1])
 

  return (
  <div>
    <h2>saya memiliki {Myangka} angka</h2>
    <button onClick={() => setMyangka((prev) => prev + 1)}>tambah angka</button>
    <button onClick={() => setMyangka((prev) => prev - 1)}>kurangi angka</button>
    <h2>{state}</h2>
   <input type='text' onChange={Handleinput}/>
   <Profile/>
  </div>
  );
}

export default App;