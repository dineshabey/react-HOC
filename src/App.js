import './App.css';
// import ClickComponents from './components/ClickComponents';
// import HoverComponents from './components/HoverComponents';
// import Student from './learnHOC/Student';
// import withNotes from './learnHOC/withNotes';
import ParentsRP from './renderProps/ParentsRP';
import StudentRP from './renderProps/StudentRP';
import ParentX from './coustomeHooks/ParentX';

function App() {
  return (
    <div className="App" style={{ marginTop: '50px' }}>

      {/* HOC exampales start*/}
      {/* {<ClickComponents />}
      {<HoverComponents />} */}
      {/* HOC exampales end*/}

      {/* Render Props start*/}
      {/* <ParentsRP /> */}
      {/* Render Props end*/}


      <ParentX />



    </div>
  );
}

export default App;
