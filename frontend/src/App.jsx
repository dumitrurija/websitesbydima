import { Route, Routes } from "react-router-dom"

// Layout
import Layout from "./Layout"

// Pages, Components
import Home from "./pages/Home/Home"
import Services from "./pages/Services/Services"
import Work from "./pages/Work/Work"
import Process from "./pages/Process/Process"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

const App = () => {
  return (
    <Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Layout>
  )
}

export default App