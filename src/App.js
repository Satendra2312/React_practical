import './App.css';
/* import Firstcomponant from './first_componant'; */
import Inotesitem from './Inotes/Inotesitem';
import Header from './Inotes/header';
import Counter from './Counter';


/* 
function Mainfunction() {
  const student = {
    name: "satendra kumar",
    address: "Raebareli",
  }


  return (
    <div>
      <h1>Main function</h1>
      <Address{...student} />
      <Name{...student} />
    </div>
  )
};

function Address(props) {
  return (
    <h1>{props.address}</h1>
  )
}

function Name(props) {
  return (
    <h1>{props.name}</h1>
  )
}
const App = () => {
  return (
    <div>
      <Mainfunction />
    </div>
  )
} */


function App() {
  return (

    <div className='App'>
      <Header></Header>
      {/* <Inotesitem /> */}
      <Counter />
    </div>
  );
}

export default App;
