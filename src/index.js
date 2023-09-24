import { createRoot } from 'react-dom/client'
import { FindCity } from './FindCity'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss'

const container = document.querySelector('#app')

const root = createRoot(container)



root.render(
    <BrowserRouter>
      
        <Routes>
            <Route path="/" element={<FindCity critere='nom' />} />
        </Routes>
       
    </BrowserRouter>
)