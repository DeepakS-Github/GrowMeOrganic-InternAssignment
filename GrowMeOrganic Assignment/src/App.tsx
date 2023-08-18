import Page1HomePage from './components/page1/Page1HomePage';
import Page2HomePage from './components/page2/Page2HomePage';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Page1HomePage />} />
          <Route path="/page2" element={<Page2HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
