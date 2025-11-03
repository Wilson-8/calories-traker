import { useMemo } from "react"
import type { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CaloriesTraquerProps ={
    activities: Activity[]
}

export default function CaloriesTraquer ({activities} : CaloriesTraquerProps) {

    const caloriesComsumed = useMemo(() => activities.reduce((total, activities) => activities.category === 1 ? total + activities.calorias : total, 0), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, activities) => activities.category === 2 ? total + activities.calorias : total, 0), [activities])

    const consumeNeto = useMemo(() => caloriesComsumed - caloriesBurned, [activities])
    return (
        <>
       <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
       <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
         <CaloriesDisplay
        calories={caloriesComsumed}
        text={"Consumindas"}
        />


        <CaloriesDisplay
        calories={caloriesBurned}
        text={"Ejercicio"}
        />

        <CaloriesDisplay
        calories={consumeNeto}
        text={"Diferencia"}
        />
       </div>
        </>
    )
}