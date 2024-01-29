import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let Data = imageData()
  return (
    <div>
      <div>
        <h1 className='heading' >Kalvium Gallery-1</h1>
      </div>
      <div className='img-container'>
        {Data.map((element) => {
          return <img src={element.img} />
        })

        }
      </div>
    </div>
  )
}

export default App;
