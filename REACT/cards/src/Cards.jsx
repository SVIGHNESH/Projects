import ProfilePic from './assets/ProfilePic.jpeg'

function Cards(){
    return(
        <div className="card">
            <img  className="card-image"src={ProfilePic} alt="Profile Picture " />
            <h2 className='card-title'>Vighnesh </h2>
            <p className='card-info'>I am studying in the RBCET ,I like to be alone</p>
        </div>
    );
}
export default Cards