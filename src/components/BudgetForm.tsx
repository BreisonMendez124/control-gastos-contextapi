import { useMemo, useState, FormEvent } from "react"
import { useBudget } from "../hooks/useBudget"

const BudgetForm = () => {
  const [ budget , setBudget ] = useState(0)
  const { dispatch } = useBudget();


  const handleBudget = ( e: React.ChangeEvent<HTMLInputElement>) => { 
    setBudget( e.target.valueAsNumber )
  }

  const handleSubmit = ( e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch({type:'add-budget', payload: { budget }})
  }

  const isValidBudget = useMemo( () => isNaN( budget ) || budget <= 0 , [ budget ])

  return (
    <form className="space-y-5" onSubmit={ handleSubmit } >
        <div className="flex flex-col space-y-5">
            <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                Definir presupuesto
            </label>
            <input  id="budget"
                    type="number"
                    onChange={ handleBudget }
                    className="w-full bg-white border border-gray-200 p-2" 
                    placeholder="Define tu presupuesto"
                    name="budget"
            />
        </div>
        <input
            type="submit"
            value='Definir presupuesto'
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-bold uppercase disabled:opacity-40"
            disabled={ isValidBudget }
        />

    </form>
  )
}

export default BudgetForm