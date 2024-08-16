import meals  from '../mocks/meals.json'
import './Meals.css'

export default function Meals(){
    return(
    <main className='meals'>
        <ul>
            {meals.meals.map(meal => (
                <li key={meal.idMeal}>
                    <img src={meal.strMealThumb} alt={meal.strMeal}/>
                    <div>
                        <strong>{meal.strMeal}</strong>
                    </div>
                    <div>
                        <button>+ Info</button>
                    </div>
                </li>
            ))}
        </ul>
    </main>
    )
}