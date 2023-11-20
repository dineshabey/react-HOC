import './App.css';
// import ClickComponents from './components/ClickComponents';
// import HoverComponents from './components/HoverComponents';
// import Student from './learnHOC/Student';
// import withNotes from './learnHOC/withNotes';
import ParentsRP from './renderProps/ParentsRP';
import StudentRP from './renderProps/StudentRP';
import ParentX from './coustomeHooks/ParentX';
import OuterN from './child/OuterN';

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

      {/* Coustome Hooks start*/}
      <ParentX />
      {/* Coustome Hooks end*/}


      {/* Child start*/}
      {/* <OuterN /> */}
      {/* Child end*/}


    </div>
  );
}

export default App;
