import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import OrderReview from './components/OrderReview/OrderReview'
import Shop from './components/Shop/Shop'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div className="bg-slate-100 ">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="orderreview" element={<OrderReview />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
