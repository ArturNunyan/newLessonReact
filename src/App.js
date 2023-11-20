import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: 'Ref',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2022, 2, 15),
    description: 'MacBook',
    amount: 1245.72,
  },
  {
    id: 'c3',
    date: new Date(2020, 2, 17),
    description: 'Jeans',
    amount: 49.99,
  },

]


function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    } 
  )
    // console.log(cost);
    // console.log('App Component');
  }

  return (
   <div>
     <h1>let's bigin</h1>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
   </div>
  );
}

export default App;
