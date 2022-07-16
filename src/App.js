import Main from './components/main/main';
import Details from './pages/feedback-details/details-items/details-items';
import Feedback from './components/main-components/feedbacks/feedback/feedback';
import './app.scss';
import {Link, Route, Routes} from 'react-router-dom'
function App() {
  return(
    <div className='main-wrapper container'>
           
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/{feedback={id}}' element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App;
