import { MouseEvent, useState } from "react";

const CITIES = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

// const ListGroup = ({ list = CITIES }) => (
//   <>
//     <h1>List</h1>
//     <ul className="list-group">
//       {list.map((list) => (
//         <li key={list}> {list} </li>
//       ))}
//     </ul>
//   </>
// );

const message = CITIES.length === 0 ? <p>List is empty</p> : null;
const getMessage = () => {
  return CITIES.length === 0 ? <p>List is empty</p> : null;
}; // a function is better when we pass parameters from the other function

// Event Handler
const handleClick = (event : MouseEvent) => console.log(event);

// let selectedIndex = -1;
// I want this variable to be a state of this component, and its value will change over time
// So we use a hook with function useState()
// const arr = useState(-1);
// arr[0] // variable (selectedIndex)
// arr[1] // updater function

function ListGroup2() {
  
const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {CITIES.length === 0 && <p>List is empty</p>}

      <ul className="list-group">
        {CITIES.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            // onClick={() => console.log("Clicked " + item + " at index " + index)}
            // onClick={handleClick}
            onClick={() => {setSelectedIndex(index);} }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
