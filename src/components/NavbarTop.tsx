import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { UserDropdown } from "./UserDropdown";
import { useAuthStore } from "../store/auth";
import { NotificationsMenu } from "./NotificationsMenu";

const NavbarTop = () => {

  const isAuth = useAuthStore(state => state.isAuth)

  return(
    <nav
    className="w-full flex flex-wrap sticky top-0 z-20 justify-between items-center mx-auto h-20 text-neutral-800 px-8 bg-light border-b border-b-divider"
    >

      {/** logo*/}  
      <div className="inline-flex w-52 h-10">
        <Link className="flex" to="/">
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
              Ecosistema Inmobiliario
            </h2>
          </div>
        </Link>
      </div>
    {/**end logo  */} 

    {/**search bar  */} 
    <SearchBar />
    {/**end search bar  */} 

    {/**login  */} 
    <div>
      <div className="flex items-center relative h-8">
        <div className="flex mr-3 items-center">
          {isAuth ? (
            <Link className="inline-block py-2 px-2 hover:bg-gray-200 rounded-full" to="/new-publication">
              <div
                className="flex items-center relative cursor-pointer whitespace-nowrap text-black">
                Publicá tu inmueble
              </div>
            </Link>
          ) : (
            <Link className="inline-block py-2 px-2 hover:bg-gray-200 rounded-full" to="/login">
              <div
                className="flex items-center relative cursor-pointer whitespace-nowrap text-black">
                Publicá tu inmueble
              </div>
            </Link>
          )}
          
          
        </div>

        {/** DIVISOR */}
        {isAuth && <span className="h-6 border-l border-gray-300 mr-1"></span>}


        {/**Notificationes */}
        {isAuth &&<NotificationsMenu/>}
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