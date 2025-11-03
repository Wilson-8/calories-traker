import type { Activity } from "../types"

type CaloriesTraquerProps ={
    activities: Activity[]
}

export default function CaloriesTraquer ({activities} : CaloriesTraquerProps) {

    return (
        <>
       <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
        </>
    )
}