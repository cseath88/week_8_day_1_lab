
const BeerSelect = ({ beers, onBeerSelected }) => {

    // const props = { beers: [],onBeerSelected: () => {} }
    // const beers = proprs.beers

    const beerSelection = beers.map((beer, id) => {
        return <option key={id} value={id}>{beer.name}</option>

    })

    if (beers.length === 0){
        return null
    }
    
    console.log(beers)

    const handleChange = (event) => {
        const id = event.target.value
        const beer = beers[id]
        onBeerSelected(beer)
    }

    return (
        <>
        <select onChange={handleChange}>
        {beerSelection}
        </select>
        </>
    )

}


export default BeerSelect

