import {IconButton} from '@material-ui/core';
import { FaSearch } from "react-icons/fa"

function Searchbar() {
    return (
        <div className="fixed top-0 left-20 my-3 rounded-full bg-[#333333] p-0  border-gray-400 border-2 w-[60vw]">
            <IconButton>
            <FaSearch/>
            </IconButton>
            <input type="text" className="bg-[#333333] outline-none px-1 w-[70%]" placeholder="Search Here Please"/>
        </div>
    )
}

export default Searchbar
