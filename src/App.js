import './App.css';
import BookMarks from './components/BookMarks';
import GfgWeekly from './components/GfgWeekly';
import GitHub from './components/GitHub';
import GoogleNews from './components/GoogleNews';
import LeetCodeMonth from './components/LeetCodeMonth';
import Social from './components/Social';
import Todo from './components/Todo';

import Draggable from 'react-draggable';
import GridLayout from 'react-grid-layout';

const hello = "hello"

function App() {
  return (
    <div class="body-container">
      
      <Todo/>
      <Social/>
      <GfgWeekly/>
      <LeetCodeMonth/>
      <GitHub/>
      <BookMarks/>
      <GoogleNews/>

    </div>
  );
}

export default App;
