
import Navbar from './Navbar'

const Header = () => {
    return (<>
         <header>
            <div className='nav-area'>
                <a href="/"> <h1>Dr. Toolkit Pro</h1> </a>
                <Navbar/>
            </div>
         </header>
         </>
/*        <div class='header-tile'>
           <div class='logo'>Dr. Toolkit Pro</div> 
           <div class='page-name'>Search Medicines</div>
        </div>
*/
    )
}
export default Header
