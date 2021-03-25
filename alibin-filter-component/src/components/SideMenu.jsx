import { NavLink } from 'react-router-dom';
import '../style/SideMenu.css';

function SideMenu() {
  return (
    <aside className="sidebar-container">
      <h1>Thiago Alcântara</h1>
      <section className="sidebar-links-container">
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/'>Vendas</NavLink>
        <NavLink to='/clients'>Clients</NavLink>
        <NavLink to='/clients'>Transações</NavLink>
      </section>
    </aside>
  )
}

export default SideMenu;