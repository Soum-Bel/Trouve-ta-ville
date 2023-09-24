import { useEffect, useState } from "react"
import { List } from "../List"
import { Search } from "../Search"
import './index.scss'

export const FindCity = () => {
    const [citiesList, setCitiesList] = useState(null)

    // Je creer ma fonction qui va me permettre, en fonction d'un mot cle, d'aller chercher les resultats dans l'API
    const getCitiesList = async (search) => {
        try {
            // Je fais la demande a l'API qui me renvoit une reponse que je stock dans la variable response
            const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${search}`)
            // Je transforme response en des donnees exploitable en JS (je recupere rellement mes donnees sous forme de tableau JS)
            const data = await response.json()
            // Je modifie le state 'citiesList' avec ma liste de communes recuperer depuis l'api
            setCitiesList(data)
        } catch (error) {
            // Je m'ecris un message d'erreur pour pouvoir debuguer
            console.error(error.message)
            // J'affiche un message a l'utilisateur
            alert('Il y a eu une erreur dans la recherche')
        }
    }

    // J'utilise useEffect pour n'appeler la fonction getCitiesList qu'une seule fois (apres le premier rendu du composant)
    useEffect(() => {
        getCitiesList('paris')
    }, [])

    // Je renvoi du JSX qui contient 3 elements
    // Un titre de premier niveau h1
    // Un composant Search
    // Un composant List (uniquement si l'etat de citiesList n'est pas falsy)
    return (
        <div className="findCity">
            <h1 className="findCity-title">Recherche par nom de commune</h1>
            <Search getCitiesList={getCitiesList} />
            {citiesList && <List citiesList={citiesList} />}
        </div>
    )
}