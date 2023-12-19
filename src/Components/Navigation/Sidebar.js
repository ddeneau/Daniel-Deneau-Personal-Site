import { Sidebar, Menu, SubMenu, MenuItem} from 'react-pro-sidebar';
import NavigationBlock from './NavigationBlock';
import houseIcon from "./home.png"
import codeIcon from "./code_blocks.png"
import movieIcon from "./live_tv.png"

const SideNavbar = () => {

    return(
        <div className='z=2'>
        <Sidebar className='z=2'>
        <Menu>
            <SubMenu label="Sections" className='my-2 px-2'>
                <MenuItem> {NavigationBlock("Technology", "/Software", codeIcon)} </MenuItem>
                <MenuItem> {NavigationBlock("Art", "/Software", movieIcon)} </MenuItem>
                <MenuItem> {NavigationBlock("Home", "/Software", houseIcon)}</MenuItem>
            </SubMenu>
        </Menu>
        </Sidebar>;
        </div>
    )}

    export default SideNavbar
