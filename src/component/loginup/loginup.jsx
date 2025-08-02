import React from 'react'
import './loginup.css'
const loginup = ({setShowloginup}) => {
    const [currstate, setCurrstate] = useState('signup')
  return (
    <div className='loginup'>
      <form action="" className="loginup-container">
        {currstate === 'signup' ? (
          <>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </>
        )}
      </form>
    </div>
  )
}

export default loginup
