import './App.css';
import {Routes,Route} from 'react-router-dom'
import Search from './component/Search'
import Short from './Pages/shorts'
import Subscribtion from './Pages/subscribtion'
import Home from './Pages/home';
import YourChannel from './Pages/yourchannel';
import History from './Pages/history';



function App() {
  return (
       <div id='App'>
        <Search>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/' element={<YourChannel/>}/>
              <Route path='/' element={<History/>}/>
              <Route path='/shorts' element={<Short/>}/>
              <Route path='/subscribtion' element={<Subscribtion/>}/>
            </Routes>
        </Search>
       </div>
  );
}

export default App;
