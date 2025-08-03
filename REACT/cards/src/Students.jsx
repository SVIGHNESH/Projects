//props : Read only properties that can be transfer from one component to another . A perent component can send the data to the child components 

//   < Component key = value /> 


//prop-type : a machanism that ensure that the passed value is of the correct datatype
//         e.g :-     age:PropTypes.number

// import PropTypes from 'prop-types';


function Student(props){


        return(
            <div className="Students">
                    <p>Name: {props.name}</p>
                    <p>Age : {props.age}</p>
                    <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
            </div>
        );
}

//proptype begin
// Student.propTypes = { 
//         name: PropTypes.string,
//         age: PropTypes.number,
//         isStudent: PropTypes.bool

// }

export default Student
