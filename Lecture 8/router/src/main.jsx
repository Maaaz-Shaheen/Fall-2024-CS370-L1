import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//      <Link to="/"> Home</Link>
//       <Link to="/about"> About</Link>
//       <h1>Home</h1>
//     </div>
//   )
// }

const About = () => {
  return (
    <div>
      {/* <Link to="/"> Home</Link>
      <Link to="/about"> About</Link> */}
      <h1>About</h1>
    </div>
  )
}

const User = () => {

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </Router>
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> */}
  </StrictMode>,
)
