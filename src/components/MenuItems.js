import Dropdown from './Dropdown'
import { useState } from 'react'

const MenuItems = ({items}) => {
    const [dropdown, setDropdown] = useState(false)
    return(
        <li className='menu-items'>
            {items.submenu ? (
                <>
                    <button
                            // ...
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} />
                </>
                ):(
                    <a href={items.url}>{items.title}</a>
            )}
        </li>
    )
}

export default MenuItems
