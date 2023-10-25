import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { sendrequest } from '../../functions'
import storage from '../../Storage/storage'
import Divinpunt from '../../components/Divinpunt'
export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const go = useNavigate()
  const login = async (e) => {
    e.preventDefault()
    const form = { user: username, contra: password }
    const res = await sendrequest('POST ', form, '/api/auth/login', '', false)
    if (res.status == true) {
      storage.set('authToken', res.token)
      storage.set('authUser', res.data)
      go('/')
    }
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image"></img>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </button>
              </div>
              </form>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div className="form-outline mb-4">
                <form onSubmit={login}>
                  <Divinpunt type='username' icon='fa-at' value={username} className='form-control' placeholder='Username' required='required'
                    handleChange={(e) => setUsername(e.target.value)} />
                  <Divinpunt type='username' icon='fa-at' value={password} className='form-control' placeholder='Password' required='required'
                    handleChange={(e) => setPassword(e.target.value)} />
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" for="form2Example3">
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
                  </div>
                </form>
                <Link to='/register'>
                  <div>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                      className="link-danger">Register</a></p>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Login