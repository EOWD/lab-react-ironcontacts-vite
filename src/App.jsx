import {useState} from 'react'
import "./App.css";
import contacts from "./contacts.json";




function App() {

  const [contactsState, setContacts] = useState(contacts.slice(0,5)) 




  const addRandomContact = ()=> {
    const notInState = contacts.filter(contact => !contactsState.includes(contact));

    console.log(notInState)

    if (notInState.length > 0) {
      const randomContact = notInState[Math.floor(Math.random() * notInState.length)];
      setContacts([...contactsState, randomContact]);}
    }
    const sortByPopularity= ()=> {
      const sortByPop=[...contactsState].sort((a,b)=>a.popularity - b.popularity)
      setContacts(sortByPop)
    }

    const sortByName = ()=>{
      const nameSorted = [...contactsState].sort((a,b)=>a.name.localeCompare(b.name))
      setContacts(nameSorted)
    }
    const Delete = (id)=> {const list = [...contactsState].filter(one => one.id !== id ); 
      setContacts(list)
}
  
  return (


    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact} > Add random </button>
      <button onClick={sortByPopularity} >Sort by popularity </button>
      <button onClick={sortByName} >Sort by name </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
           
          </tr>
        </thead>
        <tbody>
          {contactsState.map((contact)=>{
return(
<tr key={contact.id}>
<td><img src={contact.pictureUrl} style={{height:'100px'}}  ></img></td>
<td>{contact.name}</td>
<td>{contact.popularity}</td>
<td>{contact.wonOscar? 'yes' : null}</td>
<td>{contact.wonEmmy? 'yes' : null}</td>

<td><button onClick={()=>Delete(contact.id)}> Delete</button></td>
 </tr>
)

          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
