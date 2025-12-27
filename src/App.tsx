import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ButtonPage from './components/ButtonPage'
import ComponentsDashboard from './components/ComponentsDashboard'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentsDashboard />} />
                <Route path="/components/button" element={<ButtonPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
