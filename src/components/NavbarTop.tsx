import SearchBar from "./SearchBar";
import { UserDropdown } from "./UserDropdown";

const NavbarTop = () => {

  return(
    <nav
    className="w-full flex flex-wrap sticky top-0 z-20 justify-between items-center mx-auto h-20 text-neutral-800 px-8 bg-light border-b border-b-divider"
    >

      {/** logo*/}  
      <div className="inline-flex w-52 h-10">
        <a className="flex" href="/">
          <div className="w-1/2 p-0">
            <img
              src="/public/alakazam.png"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="leading-3">
            <h1 className="font-bold text-xl text-primary_2 ml-2" >Alakazam</h1>
            <h2 className="text-sm w-full text-nowrap text-gray-700/80 font-normal">
              Alquileres e inmuebles
            </h2>
          </div>
        </a>
      </div>
    {/**end logo  */} 

    {/**search bar  */} 
    <SearchBar />
    {/**end search bar  */} 

    {/**login  */} 
    <div>
      <div className="flex items-center relative h-8">
        <div className="flex mr-3 items-center">
          <a
            className="inline-block py-2 px-2 hover:bg-gray-200 rounded-full"
            href="#"
          >
            <div
              className="flex items-center relative cursor-pointer whitespace-nowrap text-black"
            >
              Publicá tu inmueble
            </div>
          </a>
          
        </div>

        {/**Divisor */}
        {/**Notification */}
        <div className="block ml-3">
          <div className="inline relative">
            {/**Dropdown User component */}
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
    {/**end login  */} 
  </nav>
  );

}

export default NavbarTop;