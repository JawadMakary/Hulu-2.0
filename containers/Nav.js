import { useRouter } from "next/router"
import requests from "../utils/requests"

const Nav = () => {
    const router=useRouter()
    return (
        <nav className='relative'>
            <div className=" flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10
            scrollbar-hide  sm:space-x-20 overflow-x-scroll ">
                {/* destructure object to get key and value->value=title and url */}
                {Object.entries(requests).map(([key,{title,url}]) =>(
                    <h2 
                    onClick={()=>router.push(`/?genre=${key}`)}
                    className='
                   
                    last:pr-24
                    cursor-pointer transition duration-100 transform hover:scale-125 
                    hover:text-white  ' key={key}>{title}</h2>
                
                ))}
            </div>
            {/* fade effect div */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from bg-gray-900 h-10 w-1/12" />
        </nav>
    )
}

export default Nav
