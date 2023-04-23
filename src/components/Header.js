import logo from "../images/NoseShadowSmaller.png"
import { Link } from 'react-router-dom';
import Wrapper from "../wrappers/LandingWrap";
import {currentPageFunc} from '../features/nav/navSlice';
import {useDispatch, useSelector} from 'react-redux';
import links from '../utils/links';

const Header = () => {
    const dispatch = useDispatch();
    const {currentPage} = useSelector((store)=> store.nav);
    const handleCurrentPage = (p) => {
        dispatch(currentPageFunc(p));
    }
return (
<Wrapper>
<div className="top-logo-container">
<Link to='/' onClick={()=>handleCurrentPage(links[0])}><img src={logo} className='logo'/></Link>
</div>
<nav className="nav">{links.map((link)=> (<Link key={link.id} to={link.path} className={link === currentPage ? "active_link" : "h4" } onClick={()=>handleCurrentPage(link)}>{link.text}</Link>))}</nav>
</Wrapper>
)
}

export default Header;
//className={link === currentPage ? "active_link" : "h4" && link.id === 7 ? "active_link seven" : "h4 seven"}