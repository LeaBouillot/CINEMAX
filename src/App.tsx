import { useState } from 'react'

export default function App() {
  const searchMovie = (e) => {
     e.preventDefault()
     console.log("La fontion searchMovie")
  }

  return (
    <main className='bg-gradient-to-bl from-neutral-800 to-red-500'>
      <h1>Cinemax</h1>
      <h3>Trouvez les infos de films et séries en 2 clicks !
      </h3>
      <form onSubmit={searchMovie}>
        <input type="text" className='border' />
        <button className=''>Rechercher</button>
      </form>
    </main>

  )
}

