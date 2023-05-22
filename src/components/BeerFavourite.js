

const BeerFavourite = ({beers, onBeerSelected}) => {

    const favBeers = beers.filter(beer => beer.isFav)

    return (
        <>
            <h2>Favourite Beers</h2>
            <ul>
                {favBeers.map(beer => {
                    return (
                        <li key={beer.id}>
                            <button onClick={() => onBeerSelected(beer.id)}>{beer.name}</button>
                        </li>
                    )
                })}
            </ul>
            
        </>
    )

}

export default BeerFavourite