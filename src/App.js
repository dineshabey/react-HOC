import './App.css';
import ClickComponents from './components/ClickComponents';
import HoverComponents from './components/HoverComponents';
import Student from './learnHOC/Student';
import withNotes from './learnHOC/withNotes';

function App() {
  return (
    <div className="App" style={{ marginTop: '50px' }}>
      {<ClickComponents />}
      {<HoverComponents />}
      {/* <Student /> */}
      {/* <withNotes/> */}
    </div>
  );
}

export default App;
