import Card from "./Card";
import Sdata from './Components/Sdata'
import './index.css';

function App() {
  return (
    <div className="App">
   
      <Card 
      cardimg={Sdata[0].cardimg}
      heading={Sdata[0].heading}
      name={Sdata[0].name}
      link={Sdata[0].link}
      />
       <Card 
       cardimg={Sdata[1].cardimg}
      heading={Sdata[1].heading}
      name={Sdata[1].name}
      link={Sdata[1].link}
      />
       <Card 
        cardimg={Sdata[2].cardimg}
        heading={Sdata[2].heading}
        name={Sdata[2].name}
        link={Sdata[2].link}
      />
       <Card 
           cardimg={Sdata[3].cardimg}
        heading={Sdata[3].heading}
        name={Sdata[3].name}
        link={Sdata[3].link}
     

      />
        <Card 
     cardimg={Sdata[4].cardimg}
        heading={Sdata[4].heading}
        name={Sdata[4].name}
        link={Sdata[5].link}
      />
        <Card 
       cardimg={Sdata[5].cardimg}
        heading={Sdata[5].heading}
        name={Sdata[5].name}
        link={Sdata[5].link}
      />
    </div>
  );
}
export default App;

