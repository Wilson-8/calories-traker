import {  useState, type Dispatch } from "react";
import {v4 as uuidv4} from 'uuid'
import { categories } from "../data/categories";
import type { Activity } from "../types";
import type { ActivityActions } from "../reducers/activity-Reducer";

type FormProps = {
    dispatch: Dispatch<ActivityActions>
  }

  const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name:'',
    calorias: 0
  }

export default function Form({dispatch}: FormProps) {



  const [activity, setActivity] = useState<Activity>(initialState)

  const handledChange = (e: React.ChangeEvent<HTMLSelectElement> |  React.ChangeEvent<HTMLInputElement>) => {

    const isNumberFiel = ['category', 'calorias'].includes(e.target.id)

    setActivity({
      ...activity,
      [e.target.id]: isNumberFiel ? +e.target.value : e.target.value
    })
  }

  const isValidActivity =() => {
    const {name, calorias} = activity
    return (
      name.trim() !== '' && calorias > 0
    )
  }

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: "Save-activity", payload: {newActivity: activity}})

    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }

  return (
    <>
    <form className="space-y-5 bg-white shadow p-10 rounded-lg"
    onSubmit={handleSumit}
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categorias:</label>

            <select className="border border-slate-300 p-2 rounded-lg bg-white w-full" 
            id="category"
            value={activity.category}
            onChange={handledChange}
            >
              

                {categories.map(category => (
                    <option 
                    key={category.id}
                    value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Actividad:</label>
                <input 
                id="name"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej: Comida, Jugo de Naranja, Ejercicio, Pesas"
                value={activity.name}
                onChange={handledChange}
                />
              </div>

               <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calorias" className="font-bold">Calorias:</label>
                <input 
                id="calorias"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias Ej: 200, 500, 700"
                value={activity.calorias}
                onChange={handledChange}
                />
              </div>

              <input type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
              value={activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
              disabled={!isValidActivity()}
              />
                
        </div>
    </form>
    </>
  )
}
