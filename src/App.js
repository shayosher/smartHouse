import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Rooms from './components/Rooms';
import AddRoom from './components/AddRoom';
import Room from './components/Room';

function App() {

  const [rooms, setRooms] = useState([]);

  const addNewRoom = (type, name, color) => {
    setRooms([...rooms,{ type: type, name: name, color: color, products: [] }])
  }

  const addProduct = (index, typeOfProduct) => {
    let temp = { condition: false, type: typeOfProduct };
    rooms[index].products.push(temp);
    setRooms([...rooms]);
  }

  const changeCondition = (indexOfRoom, indexOfProduct) => {
    rooms[indexOfRoom].products[indexOfProduct].condition = !rooms[indexOfRoom].products[indexOfProduct].condition;
    setRooms([...rooms]);
  }

  return (
    <div className="App">
      <h1>smart hause</h1>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Rooms rooms={rooms} />} />
          <Route path='/addRoom' element={<AddRoom addNewRoom={addNewRoom} />} />
          {rooms.map((val, index) => {
            return <Route path={`/room${val.name}`} element={<Room addProduct={addProduct} changeCondition={changeCondition} index={index} type={val.type} name={val.name} products={val.products} />} />
          })}
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;
