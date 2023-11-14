import './cost.css'
import CostItem from './CostIntem'
import Card from '../UI/Card'
import CostFilter from './CostFilter'
import React, {useState} from 'react'

function Costs(props) {

    const [selectedYear, setSelectedYear] = useState('2021')

    const yearChangeHandler = (year) => {
        // console.log(year);
        // console.log('costs Component');
        setSelectedYear(year)
    }

    return(
        <div>
            <Card className='costs'>
                <CostFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler} 
                />
                <CostItem 
                    date={props.costs[0].date} 
                    description={props.costs[0].description} 
                    amount={props.costs[0].amount}
                />
                <CostItem 
                    date={props.costs[1].date} 
                    description={props.costs[1].description} 
                    amount={props.costs[1].amount}
                />
                <CostItem 
                    date={props.costs[2].date} 
                    description={props.costs[2].description} 
                    amount={props.costs[2].amount}
                />
            </Card>
        </div>
    )
}

export default Costs