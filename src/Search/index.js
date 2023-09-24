import { useState } from "react"
import './index.scss'

export const Search = ({ getCitiesList }) => {
    // Je creer un nouvel etat pour surveiller la valeur du champ input de mon formulaire
    // Je l'initialise par une chaine de caractere vide
    const [searchInput, setSearchInput] = useState('')

    // Je creer une fonction qui sera appele des qu'un changement se produit sur le formulaire
    const handleChange = (event) => {
        // Je fais en sorte que mon Etat soit toujours en accord avec la valeur du champ input
        setSearchInput(event.target.value)
    }

    // Je creer une fonction qui sera appele des que le formulaire est envoyé
    const handleSubmit = (event) => {
        // J'empeche le comportement d'un formulaire par default (rafraichir la page)
        event.preventDefault()
        // Je recupere la liste des commune en fonction de la recherche
        getCitiesList(searchInput)
    }

    // J'affiche mon formulaire et j'ajoute des evenements sur
    // mon champ input pour surveiller chaque changement
    // mon envoi du formulaire pour faire une nouvelle requete API
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