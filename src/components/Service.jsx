import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

export default function Service() {
  const services = useLoaderData();
  const showIngMeal = services.meals.slice(7, 14);
  return (
    <div className="my-12 max-w-4xl bg-blue-950 mx-auto text-white py-2 px-4 rounded-2xl">
      <h1 className="p-2 text-center px-2 py-4 text-6xl">
        we have total {showIngMeal.length} meals Item
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {showIngMeal.map((meal, idx) => (
          <Meal key={idx} meal={meal} />
        ))}
      </div>
    </div>
  );
}
