// import Card from './Cards.jsx'
// import Button  from "./Button.jsx";
import Students from './Students.jsx'
function App() {
 

  return (
    <>
      {/* <Card/>
      <Card/>
      */}
      {/* <Button/> */}
      
        <Students name= {34} age = {34} isStudent={false}/>    
        <Students name= "Meliodas" age = {10000} isStudent={false}/>
        <Students name= "THis" age = {8800} isStudent={true}/>
        <Students name= "That" age = {10} isStudent={true}/>

    </>
   

  );
}

export default App
