import { useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTraker from "./components/BudgetTraker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {

  const { state } = useBudget()
  const isValidBudget = useMemo( ( ) => state.budget > 0 , [ state.budget ]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <p className="text-white text-center uppercase text-4xl font-bold">Planificador de gastos</p>
      </header>

      <div className="max-w-3xl mx-auto rounded-lg bg-white shadow-lg mt-10 p-10">
        { isValidBudget ? <BudgetTraker /> : <BudgetForm /> }
      </div>
      { isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal />
          <ExpenseList/>
        </main> 
      )}
    </>
  )
}

export default App
