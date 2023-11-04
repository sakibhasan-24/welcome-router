import { Link, useLoaderData } from "react-router-dom";

export default function Details() {
  const mealDish = useLoaderData();
  const { meals } = mealDish;
  console.log(meals[0]);

  return (
    <div className="w-3/4 mx-auto">
      <h1 className="text-6xl my-12 underline text-center text-blue-700">
        {meals[0].strMeal}
      </h1>
      <div>
        <img
          className="w-2/3 mx-auto h-72 rounded-3xl"
          src={meals[0].strMealThumb}
          alt=""
        />
      </div>

      <p className="text-center text-gray-600 my-6">
        {meals[0].strInstructions}
      </p>
      <Link className="flex justify-center items-center" to="/service">
        {" "}
        <button className="bg-blue-950 text-white font-bold text-2xl px-6 py-2 rounded-lg border-0 ">
          Back
        </button>
      </Link>
    </div>
  );
}
