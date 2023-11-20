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

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
        }
    )

    let costContent = <p>no costs in {selectedYear} year</p>

    if (filteredCosts.length > 0) {
        costContent = filteredCosts.map(costs => 
            <CostItem
                key={costs.id}
                date={costs.date} 
                description={costs.description} 
                amount={costs.amount}
            />
        )
    }

    return(
        <div>
            <Card className='costs'>
                <CostFilter
                    year={selectedYear}
                    onChangeYear={yearChangeHandler} 
                />
                {/* {filteredCosts.length === 0 ? <p>no costs in {selectedYear} year</p> : filteredCosts.map(costs => 
                <CostItem
                    key={costs.id}
                    date={costs.date} 
                    description={costs.description} 
                    amount={costs.amount}
                />
                )} */}
                {/* <CostItem 
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
                /> */}
            {costContent}
            </Card>
        </div>
    )
}

export default Costs