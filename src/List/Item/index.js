import './index.scss'

export const Item = ({ nom, codesPostaux, codeRegion, population, populationIsFormatted }) => {

    // J'affiche toutes les informations d'une commune en particulier
    return (
        <li className="item">
            <span className="item-part"><strong>{nom}</strong> - {codeRegion}</span>
            <span className="item-part">
                <span className="item-label">Code postal :</span> {codesPostaux[0]}
            </span>
            <span className="item-part">
                <span className="item-label">Population :</span> {populationIsFormatted === false ? population : formatPopulation(population)}
            </span>
        </li>
    )
}
