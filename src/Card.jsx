import profilePic from "./assets/profile.jpg"

function Card(){

    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture" />
            <h2 className="card-title">Soma</h2>
            <p className="card-text">I listen to song's and try to sing the song.</p>
        </div>
    );
}

export default Card