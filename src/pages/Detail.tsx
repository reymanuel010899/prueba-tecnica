import { useEffect} from 'react';
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import get_doc from '../redux/services/getCustomer';
import { connect } from 'react-redux';
import { address, customer } from '../typados/Customer';
import { user } from '../typados/login';

type CustonPros = {
    user: user,
    customer: customer
}
const Detail = ({user, customer}: CustonPros) => {
    const dispatch = useDispatch();
    let { pk } = useParams();
    useEffect(()=>{
        get_doc(pk)(dispatch)
    }, [])

    return (
        <>
        <div className="container">
            <h2>{user.username}</h2>
        <form action="action_page" className="Form">
            <div className="row">
            <div className="col-25 ">
                <label >First Name</label>
            </div>
            <div className="col-75 contenedor__ul">
                <input className="input" type="text" id="fname" name="firstname" placeholder="Your name.." value={customer?.user?.username || ''} readOnly/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label>last Name</label>
            </div>
            <div className="col-75  contenedor__ul">
                <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.." value={`${customer?.paternal_last_name || ''} ${customer?.maternal_last_name}`} readOnly/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label >Phone Number</label>
            </div>
            <div className="col-75  contenedor__ul">
            <input className="input" type="text" id="lname" name="lastname" placeholder="Your last name.."  value={customer?.phone || ''} readOnly/>
            </div>
            </div>
            <div className="row">
            <div className="col-25">
                <label >Addrees</label>
            </div>
            <div className="col-75 contenedor__ul">
  <div className="textarea" id="subject">
    <table id="head_child">
      <thead>
        <tr>
          <td>street</td>
          <td>city</td>
          <td>state</td>
          <td>number</td>
          <td>country</td>
        </tr>
      </thead>
      <tbody>
        {customer?.adress.map((adress: address, index: number) => (
          <tr key={index}>
            <td>{adress?.street}</td>
            <td>{adress?.city}</td>
            <td>{adress?.state}</td>
            <td>{adress?.number}</td>
            <td>{adress?.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

            </div>
    
        </form>
        
        </div>
        </>
    )
}

const mapStateToPro = (state: any) => ({
    customer: state.get_doc.customer,
    user: state.LoginReducer.user
  })
  
  export default connect(mapStateToPro,{
    get_doc
  })( Detail)