import CostItem from "./CostIntem"
import './costList.css'

const CostList = (props) => {

    // console.log(props);
    // let currentYear = props.costs[0].date.getFullYear().toString()

    if (props.costs.length === 0) {
        return <h2 className="cost-list__fallback">
                    no costs in {props.year} year
               </h2>
    }

    // console.log(props.year);
    
    return <ul className="cost-list">
        {props.costs.map(costs => 
            <CostItem
                key={costs.id}
                date={costs.date} 
                description={costs.description} 
                amount={costs.amount}
            />
        )}
    </ul>
}

export default CostList