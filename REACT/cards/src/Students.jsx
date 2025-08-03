//props : Read only properties that can be transfer from one component to another . A perent component can send the data to the child components 

//   < Component key = value /> 


//prop-type : a machanism that ensure that the passed value is of the correct datatype
//         e.g :-     age:PropTypes.number

// import PropTypes from 'prop-types';


function Student(names){


        return(
            <div className="Students">
                    <p>Name: {name.name}</p>
                    <p>Age : {name.age}</p>
                    <p>isStudent : {name.isStudent ? "Yes" : "No"}</p>
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
