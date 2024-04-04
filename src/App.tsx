import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"

function App() {

  const { state } = useBudget()
  console.log( state.budget );

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <p className="text-white text-center uppercase text-4xl font-bold">Planificador de gastos</p>
      </header>

      <div className="max-w-3xl mx-auto rounded-lg bg-white shadow-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  )
}

export default App
