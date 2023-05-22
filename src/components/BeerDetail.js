
const BeerDetail = ({beer, handleFavBeer}) => {

    if (!beer) {
        return null
    }

    const handleClick = () => {
        handleFavBeer(beer.id)
    }

    const favBeerText = beer.isFav ? 'Remove from Faves' : 'Add to Faves'

    return (
        <>
        <div className="beer-detail">
            <label htmlFor="beer-detail"></label>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <img src={beer.image_url}/>
            <button onClick={handleClick}>{favBeerText}</button>
        </div>
        </>
    )


}

export default BeerDetail