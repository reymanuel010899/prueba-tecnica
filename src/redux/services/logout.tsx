import axios from 'axios'

 async function logout() {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({
        'token_id': localStorage.getItem('Token')
    })

    try {
        const res = await axios.post(`http://127.0.0.1:8000/user/logout/`, body, config);
        if (res.status === 200) {
            localStorage.removeItem('Token')
            localStorage.removeItem('activated')
            localStorage.removeItem('user')
        } 
    }
    catch(err){
        console.error(err)
    }
 }
export default logout