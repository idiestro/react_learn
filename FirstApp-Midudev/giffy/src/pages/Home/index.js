import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIGS = ["Matrix", "Mapache", "Panda", "Crossfit"]

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const hangleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input  placeholder= 'Busca un gif aquí...' 
                    onChange={hangleChange} 
                    type="text" 
                    value={keyword}>
            </input>
        </form>
        <h3>Los gifs más populares</h3>
        <ul>
            {POPULAR_GIGS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                    Gifs de {popularGif} </Link>
                </li>
            ))}
        </ul>
        </>
    )
}