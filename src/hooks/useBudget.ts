import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContext"


export const useBudget = () => {
    const context = useContext( BudgetContext );
    if(!context){
        //El app del main.tsx debe estar rodeado con el budgetProvider como component
        throw new Error('useBudget must be used within BudgetProvider')
    }
    return context
}