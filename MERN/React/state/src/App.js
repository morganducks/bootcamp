import './App.css';
import Users from './components/Users'

function App() {

  const userList = [
    {
      firstName: "Paul",
      lastName: "Morgan",
      age: 52,
      hairColor: "Grey"
    },
    {
      firstName: "PaJimul",
      lastName: "Fluberty",
      age: 25,
      hairColor: "Brown"
    }
  ];
 
 
  return (
    <div className="App">
      {
        userList.map((userList,index) => {
          return(
            <Users 
              key={index}
              firstName={userList.firstName}
              lastName={userList.lastName}
              age={userList.age}
              hairColor={userList.hairColor}
            />
            )
          }
        )
      }
    </div>
  );
}

export default App;
