import { createRoot } from 'react-dom/client'
import { FindCity } from './components/FindCity'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.scss'

const container = document.querySelector('#app')

const root = createRoot(container)

const Home = () => {
    return (
        <h1>Bonjour et bienvenu sur ma page d'accueil</h1>
    )
}

const About = () => {
    return (
        <h1>Le site a bien ete creer par MOIIII !</h1>
    )
}

root.render(
    <BrowserRouter>
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/recherche-par-nom'>Recherche par nom</Link>
            <Link to='/recherche-par-cp'>Recherche par code postal</Link>
            <Link to='/a-propos'>A propos</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recherche-par-nom" element={<FindCity critere='nom' />} />
            <Route path="/recherche-par-cp" element={<FindCity critere='cp' />} />
            <Route path="/a-propos" element={<About />} />
        </Routes>
        {/* <FindCity /> */}
    </BrowserRouter>
)