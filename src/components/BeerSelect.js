import './BeerSelect.css'

const BeerSelect = ({ beers, onBeerSelected }) => {

    // const props = { beers: [],onBeerSelected: () => {} }
    // const beers = proprs.beers

    const beerSelection = beers.map((beer, id) => {
        return <option key={id} value={id}>{beer.name}</option>

    })

    if (beers.length === 0){
        return null
    }
    
    const handleChange = (event) => {
        const id = event.target.value
        const beer = beers[id]
        onBeerSelected(beer)
    }

    return (
        <>
        <h3>Select your beer</h3>
        <div className="select-container">
        <select onChange={handleChange}>
        {beerSelection}
        </select>
        </div>
        </>
    )

}


export default BeerSelect

