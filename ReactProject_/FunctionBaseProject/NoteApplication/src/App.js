import './App.css';
import Navbae from './components/Navbar';

import Form from './components/Form';
import NotesContainer from './components/NotesContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PageNoteFoundError from './components/PageNotFounrError';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbae />
          <div className="container my-3">
          <Routes>
            <Route exact path="/notes" element={<NotesContainer />} />
            <Route exact path="/" element={<Form />} />
            <Route exact path="*" element={<PageNoteFoundError/>} />
          </Routes>
          {/* <NotesContainer/> */}
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
