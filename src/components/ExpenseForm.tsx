import { ChangeEvent, useState } from "react"
import { categories } from "../data/categories"
import { DraftExpense } from "../types"
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

function ExpenseForm (){

    const initialExpenseState = { 
        expenseName: '',
        amount: 0,
        category: '',
        date: ''
    }
    const [ expense , setExpense ] = useState<DraftExpense>( initialExpenseState );
    const [ error , setError ] = useState('');
    const { dispatch } = useBudget()


    const handleChange = ( e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> ) => {
        const { name , value } = e.target;
        const isAmnountField = ['amount'].includes( name );
        setExpense({
            ...expense,
            [ name ] : isAmnountField ? +value : value
        })
    }

    const handleSumbit = (e :  React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        //Validar
        if( Object.values( expense ).includes('')){ 
            setError( 'Todos los campos son obligatorios')
            return
        }


        //Guardar datos
        dispatch({ type:'save-budget' , payload:{ expense } } )

        //Reiniciar state\
        setExpense( initialExpenseState );
        
    }



    return (
        <form className="space-y-5" onSubmit={ handleSumbit }>

            <legend
                className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                    Nuevo gasto
            </legend>

            { error && <ErrorMessage> { error } </ErrorMessage> } 

            <div className="flex flex-col gap">
                <label htmlFor="expenseName">
                    Nombre gasto:
                </label>
                <input 
                        type="text"
                        id="expenseName"
                        placeholder="Agrega el nombre del gasto"
                        className="bg-slate-100 p-2"
                        name="expenseName"
                        value={ expense.expenseName }
                        onChange={ handleChange }
                />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="amount">
                    Cantidad:
                </label>
                <input 
                        type="number"
                        id="amount"
                        placeholder="Agrega la cantidada del gasto ej. 300"
                        className="bg-slate-100 p-2"
                        name="amount"
                        value={ expense.amount }
                        onChange={ handleChange }
                />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="category">
                    Categoria:
                </label>
                <select
                        id="category"
                        className="bg-slate-100 p-2"
                        name="category"
                        value={ expense.category }
                        onChange={ handleChange }
                >
                    <option value="">--- Seleccione --- </option>

                    { categories.map( ( categorie )=> ( 
                        <option key={ categorie.id } value={ categorie.id }>{ categorie.name } </option>
                    ))}

                </select>
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="date">
                    Fecha gasto:
                </label>
                <input 
                        type="date"
                        id="date"
                        placeholder="Agrega la cantidada del gasto ej. 300"
                        className="bg-slate-100 p-2"
                        name="date"
                        value={ expense.date }
                        onChange={ handleChange }
                />
            </div>

            <input 
                    type="submit"
                    className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                    value={'Registrar Gasto'}
            />
        </form>
    )
}

export default ExpenseForm