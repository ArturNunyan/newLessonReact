import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: 'Ref',
      amount: 999.99,
    },
    {
      date: new Date(2023, 2, 15),
      description: 'MacBook',
      amount: 1245.72,
    },
    {
      date: new Date(2023, 2, 17),
      description: 'Jeans',
      amount: 49.99,
    },

  ]

  return (
   <div>
     <h1>let's bigin</h1>
      <Costs costs={costs}/>
   </div>
  );
}

export default App;
