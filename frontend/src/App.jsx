import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './comps/pages/Home';


function App() {
  return (

    <div className='p-5'>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>

  )
}
  



export default App
