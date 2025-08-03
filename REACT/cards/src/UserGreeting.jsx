//Conditional rendering : allows you to control what gets rendered in your application based on certain condiditions
//                        (show,hide, or change component )

function UserGreeting(props){
        
            
                if(props.isLoggedIn){
                        return <h2>Welcome {props.userName}</h2>
                }
            
                return <h2>Please Login to Continue</h2>
                
        
        
}

export default UserGreeting