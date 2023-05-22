import './BeerDetail.css'

const BeerDetail = ({beer, onFavouriteToggle, beers}) => {

    if (!beer) {
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(beer.id)
    }

    const chosenBeer = beers.find((beerObject) => beerObject.id === beer.id)
    const favBeerText = chosenBeer.isFav ? 'Remove from Faves' : 'Add to Faves'

    return (
        <>
        <div className="beer-detail">
            <label htmlFor="beer-detail"></label>
            <h3>{beer.tagline}</h3>
            <p>ABV:{beer.abv}%</p>
            <p>{beer.description}</p>
            <img className='beer-image' src={beer.image_url}/>
            <button onClick={handleClick}>{favBeerText}</button>
        </div>
        </>
    )


}

export default BeerDetail