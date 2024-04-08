import { DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from 'uuid';

export type BudgetActions = 
 { type:'add-budget' , payload: { budget: number } } |
 { type: 'save-budget' , payload: { expense: DraftExpense } } |
 { type:'show-modal' } |
 { type:'close-modal' } 



export type BudgetState = {
    budget: number
    modal: boolean
    expense:  Expense[]
}


const createExpense = ( draftExpense: DraftExpense ): Expense => { 
    return { 
        ...draftExpense,
        id: uuidv4()
    }
}

export const initialState: BudgetState = {
    budget:0,
    modal: false,
    expense: []
}

export const budgetReducer = ( 
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    
    if( action.type === 'add-budget'){
        
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if( action.type == "show-modal"){
        return { 
            ...state,
            modal: true
        }
    }


    if( action.type == "close-modal"){
        return { 
            ...state,
            modal: false
        }
    }

    if( action.type === 'save-budget'){ 

        const expense = createExpense( action.payload.expense );
        return { 
            ...state,
            expense,
            modal: false
        }
    }
    // return state
    
}