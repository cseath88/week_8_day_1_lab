import './BeerFavourite.css'

const BeerFavourite = ({beers, onBeerSelected}) => {

    const favBeers = beers.filter(beer => beer.isFav)

    return (
        <div className="favourite-beers">
            <h2>Favourite Beers</h2>
            <ul>
                {favBeers.map(beer => {
                    return (
                        <li key={beer.id}>
                            {beer.name}
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )

}

export default BeerFavourite