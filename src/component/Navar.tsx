// import 'bootstrap/dist/css/bootstrap.min.css';

import { user } from "../typados/login"
import CerrerSeccion from "./Logout"

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
type NavarProps = {
    user: user | null; // Asegúrate de que pueda ser nulo
};
const Navar  = ({user}: NavarProps) => {
    // console.log(user.username&&user.username)
    return (
        <>

            {
                user?.username ? <span className="welcome">Hello, {user.username}</span> : <span>Invitado</span>
            }
        <nav className="navar">  
            
            
        <CerrerSeccion/>  
        </nav>
        </>
    )
}

export default Navar