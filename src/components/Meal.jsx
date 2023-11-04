export default function Meal({ meal }) {
  console.log(meal);
  return (
    <div className="border-4 rounded-xl px-2 py-1">
      <div>
        <img className="w-1/2 mx-auto " src={meal.strMealThumb} alt="meals" />
      </div>
      <div className="text-center text-2xl font-bold ">
        <h1>{meal.strMeal}</h1>
        <h3>{meal.strCategory}</h3>
        <h3>{meal.strArea}</h3>
      </div>
    </div>
  );
}
