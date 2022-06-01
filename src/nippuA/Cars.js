import React from 'react'

const Cars = () => {
  const cars = [
    {
      name: 'Ford',
      color: 'gray',
      model: 'C-Max'
    },
    {
      name: 'Audi',
      color: 'black',
      model: 'A4'
    },
    {
      name: 'Mazda',
      color: 'white',
      model: '3'
    },
    {
      name: 'Toyota',
      color: 'red',
      model: 'Corolla'
    },
    {
      name: 'Honda',
      color: 'blue',
      model: 'Civic'
    }
  ]

  return (
    <div>
      {cars.map((car, index) => {
        return (
          <ul key={index}>
            <li>
              <h1>{car.name}</h1>
              <h2>{car.color}</h2>
              <h3>{car.model}</h3>
            </li>
          </ul>
        )
      })}
    </div>
  )
}

export default Cars
