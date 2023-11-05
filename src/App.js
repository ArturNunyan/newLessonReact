import CostItem from "./components/CostIntem";

function App() {

  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: 'Ref',
      amount: 999.99,
    },
    {
      date: new Date(2022, 2, 12),
      description: 'MacBook',
      amount: 1245.72,
    },
    {
      date: new Date(2024, 2, 12),
      description: 'Jeans',
      amount: 49.99,
    },

  ]

  return (
   <div>
     <h1>let's bigin</h1>
     <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}></CostItem>
     <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}></CostItem>
     <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}></CostItem>
   </div>
  );
}

export default App;
