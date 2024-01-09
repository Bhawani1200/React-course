import './Header.css'
function Header() {
  return (
   <nav>
   <div className="main">
        <h2>Dashboard</h2>
        <input type="text" placeholder="Search" className='dash'/>
        <ul className='navi'>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
    </div>

   </nav>
  )
}

export default Header;