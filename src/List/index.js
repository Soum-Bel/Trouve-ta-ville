import { useState } from "react"
import { Item } from "./Item"
import './index.scss'

export const List = ({ citiesList }) => {
    // Je crée un nouveau state qui va contenir l'affichage actuel de la population
    const [populationIsFormatted, setPopulationIsFormatted] = useState(false)

    // Je crée une fonction qui va être appellée a chaque click de mon bouton
    const handleClick = () => {
        // J'inverse la valeur de mon state (pour modifier l'affichage)
        setPopulationIsFormatted(!populationIsFormatted)
    }

    // Je boucle sur mon tableau de commune pour créer un nouveau composant Item
    // pour chacune de mes communes
    return (
        <section className="list">
            <div className="list-top">
                <h2 className="list-title">Resultats</h2>
                <button onClick={handleClick} className="list-action">Changer le format</button>
            </div>
            <ul id="list-results">
                {citiesList.map(city => {
                    return (
                        <Item
                            key={city.code}
                            nom={city.nom}
                            codesPostaux={city.codesPostaux}
                            codeRegion={city.codeRegion}
                            population={city.population}
                            populationIsFormatted={populationIsFormatted}
                        />
                    )
                })}
            </ul>
        </section>
    )
}