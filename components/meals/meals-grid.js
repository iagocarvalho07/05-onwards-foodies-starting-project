import classes from './meals-grid.module.css'
import MealsItem from './meals-iten'

export default function MealsGrid({meals}){
    return <ul className={classes.meals}>

        {meals.map(meal => <li key={meal.id}>
            <MealsItem {...meal}/>
        </li>)}
    </ul>
}