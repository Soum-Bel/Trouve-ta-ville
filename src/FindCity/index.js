import { useEffect, useState } from "react"
import { List } from "../List"
import { Search } from "../Search"
import './index.scss'

export const FindCity = () => {
    const [citiesList, setCitiesList] = useState(null)

    // Je crée ma fonction qui va me permettre, en fonction d'un mot clé, d'aller chercher les resultats dans l'API
    const getCitiesList = async (search) => {
        try {
            // Je fais la demande a l'API qui me renvoie une réponse que je stocke dans la variable response
            const response = await fetch(`https://geo.api.gouv.fr/communes?nom=${search}`)
            // Je transforme response en des données exploitables en JS (je recupère réellement mes données sous forme de tableau JS)
            const data = await response.json()
            // Je modifie le state 'citiesList' avec ma liste de communes recuperées depuis l'API
            setCitiesList(data)
        } catch (error) {
            // J'écris un message d'erreur pour pouvoir débuguer
            console.error(error.message)
            // J'affiche un message a l'utilisateur
            alert('Il y a eu une erreur dans la recherche')
        }
    }

    // J'utilise useEffect pour n'appeler la fonction getCitiesList qu'une seule fois (après le premier rendu du composant)
    useEffect(() => {
        getCitiesList('')
    }, [])

    // Je renvoi du JSX qui contient 3 élements
    // Un titre de premier niveau H1
    // Un composant Search
    // Un composant List (uniquement si l'état de citiesList n'est pas falsy)
    return (
        <div className="findCity">
            <h1 className="findCity-title">Recherche par nom de commune</h1>
            <Search getCitiesList={getCitiesList} />
            {citiesList && <List citiesList={citiesList} />}
        </div>
    )
}