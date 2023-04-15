import React from "react"

function Car(props) {
    return <p>[{props.id}] {props.brand}    {props.price}   {props.review}</p>;
}

export default function CarList() {
    const cars = [
        {id: 1, brand: 'GRADEUR', price: 4500, review: 'Gracefule design'}, 
        {id: 2, brand: 'BMW', price: 7800, review: 'Functional of high level'}, 
        {id: 3, brand: 'GENESIS', price: 6700, review: 'Popular Car'} ];
    return (
        <div align="left">
            <h1>Car List</h1>
            <p>
                {cars.map((car) => <Car id={car.id} brand={car.brand} price={car.price} review={car.review}/>)}
            </p>
        </div>
    );
}