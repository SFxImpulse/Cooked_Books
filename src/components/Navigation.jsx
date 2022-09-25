import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlender } from '@fortawesome/free-solid-svg-icons'

import './Navigation.scss';

function Navigation(props) {
  return (
    <nav className="navbar">
      <FontAwesomeIcon icon={faBlender} className='logo' />
      <h2 className='nav-text'>Cookanizer</h2>
      <section className='nav-item-container'>
        <button className='nav-button'>
          <h2 className='nav-item text--bold'>Recipies</h2>
        </button>
        <button className='nav-button'>
          <h2 className='nav-item text--bold'>Favourites</h2>
        </button>
        <button className='nav-button'>
          <h2 className='nav-item text--bold'>Grocery List</h2>
        </button>
      </section>
    </nav>
  )
}

export default Navigation;