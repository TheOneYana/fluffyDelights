import logo from "../images/NoseShadowSmaller.png"
import { Link } from 'react-router-dom';
import Wrapper from "../wrappers/LandingWrap";

const Header = () => {
return (
<Wrapper>
<div className="top-logo-container">
<img src={logo} className='logo'/>
</div>
<nav className="nav"><Link to='/' className="h4">Home</Link><Link to='/About' className="h4">About</Link><Link to='/Gallery' className="h4">Gallery</Link><Link to='/OurClients' className="h4">Our CLients</Link><Link to='/Contact' className="h4">Contact</Link><Link to="https://flip-card-memory-game.netlify.app"  className="h4">Cat Game!</Link></nav>
</Wrapper>
)
}

export default Header;