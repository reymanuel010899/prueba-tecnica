import { useState, useEffect } from 'react'
import register from '../redux/services/register';
import { useNavigate } from 'react-router-dom';

const Register = ({

  loading
}) => {
    const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const [err, setErr] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    username: '',
    gmail: '',
    password: '',
    repect_password: ''
  })

  const { 
    nombre,
    username,
    gmail,
    password,
    repect_password,
   
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    if(password == repect_password) {
        register(formData).then((res)=>{
            navigate('/'); 
        });
    } else {
        setErr(true)
    }
    
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register user</h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                
                {
                    err ? <label htmlFor="password" className="block text-sm font-medium text-gray-700 err" >
                    Password incorrect
                  </label> : ''
                }
            <form onSubmit={e=>onSubmit(e)} className="space-y-6 login">
              <div className='input'>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  username
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    value={username}
                    onChange={e=>onChange(e)}
                    type="username"
                    required
                    className="appearance-none block w-full px-3 py-2 input border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className='input'>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  nombre
                </label>
                <div className="mt-1">
                  <input
                    name="nombre"
                    value={nombre}
                    onChange={e=>onChange(e)}
                    type="nombre"
                    required
                    className="appearance-none block w-full px-3 py-2 input border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className='input'>
                <label htmlFor="gmail" className="block text-sm font-medium text-gray-700">
                  gmail
                </label>
                <div className="mt-1">
                  <input
                    name="gmail"
                    value={gmail}
                    onChange={e=>onChange(e)}
                    type="gmail"
                    required
                    className="appearance-none block w-full px-3 py-2 input border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              
              <div className='input'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className='input'>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  repect Password
                </label>
                <div className="mt-1">
                  <input
                    name="repect_password"
                    value={repect_password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

             

              <div>
                { loading ? 
                <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <h3>cargando</h3>
              </button>:
              <button
              type="submit"
              className="w-full send flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              register
            </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

