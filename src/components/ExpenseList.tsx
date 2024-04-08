import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget"
import ExpenseDetails from "./ExpenseDetails";

function ExpenseList() {
    
  const { state } = useBudget();
  const isEmpty = useMemo( ( ) => state.expense.length === 0 , [ state.expense ])
  return (
    <div className="mt-10">
        { isEmpty ? <p className="text-gray-600 text-2xl font-bold"> No hay gastos </p> : ( 
            <>
                <p className="text-gray-600 text-2xl font-bold my-5"> Listado de gastos.</p>
                { state.expense.map( ( expense ) => ( 
                    <ExpenseDetails 
                     key={ expense.id }
                     expense={ expense } 
                    />
                ))}
            </>
        )}

    </div>

  )
}

export default ExpenseList