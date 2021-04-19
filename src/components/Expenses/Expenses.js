import React, {useState} from 'react'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = (selectedYear) => {
        const filteredData = selectedYear
        setFilteredYear(filteredData)
    }

    const filteredExpenses = props.items.filter(expense =>
                expense.date.getFullYear().toString() === filteredYear
    )
    

    return (
        <Card className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items ={filteredExpenses} />
        </Card>
    )
}

export default Expenses