import PersonCard from './components/PersonCard';
//Aqui instale y configure SASS en este proyecto
import './App.scss';

function App() {
  return (
    <div className="App" className="form-class">
      <PersonCard firstName='Jane' lastName='Doe' age={45} hairColor='Black'/>
      <PersonCard firstName='John' lastName='Smith' age={88} hairColor='Brown'/>  
      <PersonCard firstName='Millard' lastName='Filmore' age={50} hairColor='Brown'/>  
      <PersonCard firstName='Maria' lastName='Smith' age={62} hairColor='Brown'/>  
    </div>
  );
}
export default App;
