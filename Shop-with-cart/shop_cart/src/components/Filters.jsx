import { useState } from 'react'
import './Filters.css'

export function Filters({onChange}){
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event) =>{
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value    
        }))
    }

    const hangleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Min Price</label>
                <input
                    type="range"
                    id="price"
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={hangleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}