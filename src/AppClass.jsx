import { Component } from 'react';
import './App.css';
import elephant from './images/elephant.jpeg';

const imgData = () => {
  let data = [
    {
      id: 1,
      img: elephant,
    },
    {
      id: 2,
      img: elephant,
    },
    {
      id: 3,
      img: elephant,
    },
    {
      id: 4,
      img: elephant,
    },
  ];
  return data;
};
// code here
function App() {
  let Data = imgData();
  return (
    <div>
      <h1 className="heading">Kalvium Gallery</h1>
      <div className="image-container">
        {Data.map((element) => {
          return <img src="{element.img" />;
        })}
      </div>
    </div>
  );
}
export default App;
