import Alert from "./components/Alert";
import ListGroup2 from "./components/ListGroup";
import Button from "./components/button";

function App() {
  const CITIES = ['New York', 'Paris', 'Manchester', 'Barcelona', 'Tokyo']

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light']

  // return <div><ListGroup2 items={CITIES} heading="Cities" onSelectItem={handleSelectItem}/></div>;
  return (
  <div>
    <Alert>
      Hello <span>World</span>
    </Alert>
    <Button color="primary" onClick={() => console.log('Button was clicked')}>My Button</Button>
  </div>)
}

export default App;