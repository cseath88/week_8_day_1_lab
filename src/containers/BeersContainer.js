import React, { useState, useEffect } from 'react';
import BeerSelect from '../components/BeerSelect';
import BeerDetail from '../components/BeerDetail';
import BeerFavourite from '../components/BeerFavourite';

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

    const chosenBeer = beers.find(beer => beer.id === selectedBeer)

    return (
        <>
        <BeerSelect beers={beers} onBeerSelected={onBeerSelected}/>
        {selectedBeer ? <BeerDetail beer={selectedBeer}/> : null}
        <BeerFavourite beers={beers} onBeerSelected={onBeerSelected}/>
        <BeerDetail beer={chosenBeer} handleFavBeer={handleFavBeer}/>
        </>
    )


}

export default BeersContainer