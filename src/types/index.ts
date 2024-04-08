export type Expense = { 
    id: string
    expenseName: string
    amount: number
    category: string
    date: string
}

export type DraftExpense = Omit<Expense,'id'>

export type Categories = { 
    id: string 
    name: string
    icon: string
}