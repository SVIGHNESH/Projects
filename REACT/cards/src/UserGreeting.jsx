//Conditional rendering : allows you to control what gets rendered in your application based on certain condiditions
//                        (show,hide, or change component )

import PropTypes from 'prop-types'
function UserGreeting(props){

            
                // if(props.isLoggedIn){
                //         return <h2>Welcome {props.userName} !!</h2>
                // }
            
                // return <h2>Please Login to Continue !!!</h2>
                
        // return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.userName}!!!</h2> : <h2 className="login-prompt">Please Login to Continue!!!</h2>);
        
    const welcomeMessage = <h2                                       className="welcome-message">Welcome {props.userName}!!!</h2>
    const loginPrompt = 
    <h2 
    className="login-prompt">Please Login to Continue!!!
    </h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt)
}

UserGreeting.proptypes= {
    isLoggedIn:PropTypes.bool,
    userName:PropTypes.string

}

export default UserGreeting