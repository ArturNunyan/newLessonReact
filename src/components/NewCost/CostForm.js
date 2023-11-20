import React, {useState} from 'react'
import './costForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    }

    const dateChanageHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costDate = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }

        props.onSaveCostData(costDate)

        // console.log(costDate);
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Name</label>
                    <input 
                        value={inputName}
                        type='text' 
                        onChange={nameChangeHandler} 
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Sum</label>
                    <input 
                        value={inputAmount}
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Date</label>
                    <input 
                        value={inputDate}
                        type='date' 
                        min='2019-01-01' 
                        step='2024-12-31' 
                        onChange={dateChanageHandler}
                    />
                </div>
                <div className='new-cost__action'>
                    <button type='submit'>Date of Consumption</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm