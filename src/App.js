import { useState } from 'react';

import './App.css';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';

function App() {
  
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
   <div className='container'>
     {user ? ( 
       <>
         <Navbar />
         <Card />
       </>
     ) : (
     <div className='login'>
       <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
         <button onClick={() => setUser(username)}>LOGIN</button>
     </div>
     )}
   </div>
  );
}

export default App;
