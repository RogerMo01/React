import Alert from "./components/Alert";
import ListGroup2 from "./components/ListGroup";


function App() {
  const CITIES = ['New York', 'Paris', 'Manchester', 'Barcelona', 'Tokyo']

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  // return <div><ListGroup2 items={CITIES} heading="Cities" onSelectItem={handleSelectItem}/></div>;
  return (
  <div>
    <Alert>
      Hello <span>World</span>
    </Alert>
  </div>)
}

export default App;