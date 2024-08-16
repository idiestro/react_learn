import './Categories.css'
import meals_categories from '../mocks/meals_categories.json'

export default function Categories(){
    return(
        <main className="categories">
            <ul>
                {meals_categories.categories.map(category => (
                    <li id={category.idCategory}>
                        <strong>{category.strCategory}</strong>
                        <img src={category.strCategoryThumb} alt={category.strCategory}></img>
                    </li>
                ))}
            </ul>
        </main>
    )
}