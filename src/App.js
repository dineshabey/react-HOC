import './App.css';
// import ClickComponents from './components/ClickComponents';
// import HoverComponents from './components/HoverComponents';
// import Student from './learnHOC/Student';
// import withNotes from './learnHOC/withNotes';
import ParentsRP from './renderProps/ParentsRP';
import StudentRP from './renderProps/StudentRP';

function App() {
  return (
    <div className="App" style={{ marginTop: '50px' }}>

      {/* HOC exampales */}
      {/* {<ClickComponents />}
      {<HoverComponents />} */}
      {/* <Student /> */}
      {/* <withNotes/> */}

      <ParentsRP/>
      {/* <StudentRP/> */}

      


    </div>
  );
}

export default App;
