import Header from './Header';
import User from './User';

function App() {

  const age=60;
  return (
    
    <div className="App">
      <Header/>                                     
      <Header/>
      <User/>
      <h1>MY FIRST REACT APP HELLO REACT {age}</h1>
    </div>
    
  );
}

export default App;
