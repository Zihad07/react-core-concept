// import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {
      'name' : 'Photoshope',
      'price' : '$56.90'
    },
    {
      'name' : 'Illustetor',
      'price' : '$60.90'
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
       
 
    
      

<Product name={products[0].name} price={products[0].price}></Product>
      </header>

    </div>
  );
}

function Person(props) {
  const personStyle =  {
    border : '2px solid cyan',
    padding: '8px',
    margin : '5px'
  }
  
  console.log(props)
  return (
    <div style={personStyle}>
      <h5>Name: {props.nayak}</h5>
      <p>Hero of {props.nayika}</p>
    </div>
  );
}


function Product(props){
  const productStyle =  {
    border : '1px solid white',
    padding: '5px',
    borderRadius:'5px',
    margin : '5px',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h1>Price: {props.price}</h1>
      <button>Buy now</button>
    </div>
  );
}

export default App;
