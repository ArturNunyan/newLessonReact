import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date(2023, 2, 12),
      description: 'Ref',
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2023, 2, 15),
      description: 'MacBook',
      amount: 1245.72,
    },
    {
      id: 'c3',
      date: new Date(2023, 2, 17),
      description: 'Jeans',
      amount: 49.99,
    },

  ]

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');
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
