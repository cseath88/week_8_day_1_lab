import React, { useState, useEffect } from 'react';
import BeerSelect from '../components/BeerSelect';
import BeerDetail from '../components/BeerDetail';
import BeerFavourite from '../components/BeerFavourite';
import './BeersContainer.css'


const BeersContainer = () => {

    const [beers, setBeers] = useState([]);
    const [selectedBeer, setSelectedBeer] = useState(null)

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = function() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    const onBeerSelected = function (beer) {
        setSelectedBeer(beer)
    }

    const handleFavBeer = (id) => {
        const updatedBeers = beers.map((beer) => {
            return beer.id === id
                ? {...beer, isFav: !beer.isFav}
                : beer
        })
        setBeers(updatedBeers)
    }

    

    return (
        <div className="container">
            <BeerSelect beers={beers} onBeerSelected={onBeerSelected} />
                {selectedBeer && (
            <BeerDetail
                beers={beers}
                beer={selectedBeer}
                onFavouriteToggle={handleFavBeer}
            />
        )}
        <BeerFavourite beers={beers} onBeerSelected={onBeerSelected} />
        </div>
    )
}
    

export default BeersContainer


