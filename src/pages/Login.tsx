import Login from './Login/Sections/Login/Login'
export const favorites = () => {
  return (
    <div>
      <Login onLogin={function (_email: string, _password: string): void {
        throw new Error('Function not implemented.');
      } }/>

    </div>
  )
}

export default Login;