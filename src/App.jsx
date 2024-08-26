
import './App.css'
import PetCard from './components/pet_card';
import cat_img from "./assets/Bella.jpg"

function App() {

  return (
    <>
     <PetCard img={cat_img} name={"Bella"}/>
    </>
  )
}

export default App;
