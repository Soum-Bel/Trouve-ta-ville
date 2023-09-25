import { useState } from "react"
import './index.scss'

export const Search = ({ getCitiesList }) => {
    // Je crée un nouvel état pour surveiller la valeur du champ input de mon formulaire
    // Je l'initialise par une chaine de caractère vide
    const [searchInput, setSearchInput] = useState('')

    // Je crée une fonction qui sera appellée dès qu'un changement se produit sur le formulaire
    const handleChange = (event) => {
        // Je fais en sorte que mon Etat soit toujours en accord avec la valeur du champ input
        setSearchInput(event.target.value)
    }

    // Je crée une fonction qui sera appellée dès que le formulaire  sera envoyé
    const handleSubmit = (event) => {
        // J'empêche le comportement d'un formulaire par défault (rafraichir la page)
        event.preventDefault()
        // Je recupère la liste des communes en fonction de la recherche
        getCitiesList(searchInput)
    }

    // J'affiche mon formulaire et j'ajoute des évènements sur mon champ input pour surveiller chaque changement
    // envoi du formulaire pour faire une nouvelle requete API
    return (
        <form className="search" onSubmit={handleSubmit}>
            <label className="search-label">
                <span className="search-title">Nom de la commune:</span>
                <input className="search-input" value={searchInput} onChange={handleChange} type="search" />
            </label>
            <button className="search-action" type="submit">Lancer la recherche</button>
        </form>
    )
}