import logo from './../../assets/logo.png'
import './header.css'

export function Header() {
  return (
    <header>
      <div className='container header-content'>
        <img src={logo} alt="" />
        <button className='header-content-button'>Nova transação</button>
      </div>
    </header>
  )
}
