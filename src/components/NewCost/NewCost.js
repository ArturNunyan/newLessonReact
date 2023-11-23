import './newCost.css'
import './CostForm'
import CostForm from './CostForm'
import React, { useState } from 'react'



const NewCost = (props) => {
    const saveCostDataHandler = (inputCostData) => {
        const costData ={
            ...inputCostData,
            id: Math.random().toString(),
        }
        // console.log(costData);
        props.onAddCost(costData)
        setIsFormVisible(false)
    }
    
    const [isFormeVisible, setIsFormVisible] = useState(false)

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return (
        
        <div className='new-cost'>
            {!isFormeVisible && <button onClick={inputCostDataHandler}>create new cost</button>}
            {isFormeVisible && <CostForm 
                onSaveCostData={saveCostDataHandler}
                onCancel={cancelCostHandler}
            />}
        </div>
    )
}

export default NewCost