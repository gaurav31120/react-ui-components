import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ButtonPage from './components/ButtonPage'
import ComponentsDashboard from './components/ComponentsDashboard'
import LoaderPage from './components/LoaderPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentsDashboard />} />
                <Route path="/components/button" element={<ButtonPage />} />
                <Route path="/components/loader" element={<LoaderPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
