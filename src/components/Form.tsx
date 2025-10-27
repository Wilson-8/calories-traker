import { categories } from "../data/categories";

export default function Form() {
  return (
    <>
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categorias:</label>

            <select className="border border-slate-300 p-2 rounded-lg bg-white w-full" 
            id="category">

                {categories.map(category => (
                    <option 
                    key={category.id}
                    value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input 
                id="activity"
                type="text"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Ej: Comida, Jugo de Naranja, Ejercicio, Pesas"
                />
              </div>

               <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calorias" className="font-bold">Calorias:</label>
                <input 
                id="calorias"
                type="number"
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="Calorias Ej: 200, 500, 700"
                />
              </div>

              <input type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
              value={'Guardar Comida o Guardar Ejercicio'}
              />
                
        </div>
    </form>
    </>
  )
}
