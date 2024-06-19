import logo from './logo.svg';
import './App.css';
import ProductCart from './components/ProductCart';
import Effects from './components/Effects';
import Tile from './components/Tile';
import Banner from './components/Banner';
import Progress from './components/Progress';
import { useState } from 'react';
import useWindowDimensions from './components/useWindowDimensions';


function App() {
  const { height, width } = useWindowDimensions();
  let [percentage, setPercentage] = useState(0);
  setInterval(() => {
    setPercentage(percentage = (percentage + 10)%110);
  } , 1000);
  return (
    <div className="App">
      <h1>Product Cart</h1>
      <ProductCart title={"oiphone"} price={"10009"}/>
      <ProductCart title={"sony"} price={"88009"} />
      <ProductCart title={"watch"} price={"456009"} />
      <Effects />

      <Tile 
      header={"React class is going onn"}
      subHeader={"lorem44 suryansh kumar is emjoying thew cladsss , bottle oin tab;e bureger id hfiohdfdfdsiu bjdbs bb"}
      img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
      text={"krp4"}
      link={"krp5"}
      linkText={"krp6"}
      position={"krp7"}

      />
      <Banner/>
      <Progress Percentage={percentage}/>

      <div>
      <h1>Window Dimensions</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>

    </div>
  );
}

export default App;
