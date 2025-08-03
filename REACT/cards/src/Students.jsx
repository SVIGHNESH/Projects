//props : Read only properties that can be transfer from one component to another . A perent component can send the data to the child components 

//   < Component key = value /> 


function Student(props){
        return(
            <div>
                    <p>Name: {props.name}</p>
            </div>
        );
}

export default Student