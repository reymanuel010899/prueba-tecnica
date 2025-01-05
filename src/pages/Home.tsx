import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import get_customers from '../redux/services/GetCustomers';
import { customer } from '../typados/Customer';
import Footer from '../component/Footer';
import CerrerSeccion from '../component/Logout';
import { user } from '../typados/login';

type customProps  = {
  // user: user,
  customers: Array<customer>,
  get_customers: ()=>{}
}
const Home = ({user, customers, get_customers}: customProps) => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0,0)
        if (!localStorage.getItem('activated')) {
          localStorage.removeItem('token')
          navigate('/'); 
        } else {
          get_customers();
        }
      },[])

  return (
    <>
    <div className='contenedor__menu'>
        {
          user?.username ? <h2 className="welcome">Hola, {user?.username}</h2> : <h2>Invitado</h2>
        }
    <CerrerSeccion />  
    <h3 className='title'>custumer list </h3>
    </div>
    <div className='contenedor__home'>
      <div className='contenedor__home-child'>
    <table className='table' id="head_child">
      <thead>
        <tr>
          <th>Username</th>
          <th>Gmail</th>
          <th>Active </th>
          <th>
            actions
          </th>
        </tr>
      </thead>
      <tbody>
        {
            customers && customers?.map((customer: customer) => {
              return (
                <tr key={customer.id}>
                  <td>{customer.user?.username}</td>
                  <td>{customer.user?.gmail}</td>
                  <td>{customer.is_active ? 'Activo' : 'inactivo'}</td>
                  <td>
                  <Link to={`/detail/${customer.id}`} className="font-medium text-indigo-600 hover:text-indigo-500 " style={{color: 'white'}}>Ver</Link>
                  </td>
                </tr>
              )
            })
        }
        
      </tbody>
    </table>
    </div>
    </div>
    <Footer/>
    </>
  )
}

const mapStateToPro = (state: any) => ({
  customers: state.get_customers.customers,
  user: state.LoginReducer.user
})

export default connect(mapStateToPro,{
  get_customers
})(Home)