// import Layout from '../../hocs/Layout'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
// import { user } from '../typados/login';
import login from '../redux/services/Login'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  // if (localStorage.getItem('activated')) {
  //    navigate('/home')};

  useEffect(() => {
    window.scrollTo(0,0)
    if(!localStorage.getItem('activated')) {
      navigate('/')
    }else {
      navigate('/home')
    }
  }, [])

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { 
    username,
    password,
  } = formData;


  const onChange = (e:  React.ChangeEvent<HTMLInputElement> ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // const onChange = (e:  React.ChangeEvent): void => setFormData({ ...formData, [e.target.name]: e.target.value });


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    // login(username, password)
    login(username, password)(dispatch).then((res)=>{
      navigate('/home');
    })

    
  }


  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 " id='contenedor_login'>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{color: '#747bff'}}>Iniciar seccion</h2>
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6 login">
              <div className='input'>
                <label htmlFor="username" className="block label text-sm font-medium text-gray-700">
                  username
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    value={username}
                    onChange={e=>onChange(e)}
                    type="username"
                    required
                    className="appearance-none login__input block w-full px-3 py-2 input border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block label text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className="appearance-none login__input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              register
            </Link>
          </p>

              <div>
                { 
                <button
                className="w-full flex login__button justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
               
              Login
            </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

