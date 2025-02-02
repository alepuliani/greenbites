import logo from "../assets/app-logo.png"
import { FaSearch, FaArrowRight } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState, useRef, useEffect } from "react"
import { RecipesContext } from "../context"

const AppHeader = () => {
  const navigate = useNavigate()
  const { setSearchValue, menuOpen, setMenuOpen } = useContext(RecipesContext)
  const [searchTerm, setSearchTerm] = useState("")
  const menuRef = useRef(null)
  const inputRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  // handling clicks outside of a specific menu element
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // prevents the default form submission, sets the search value, navigates to the "/recipes" page, and resets the search term
  const handleSearchRecipe = (e) => {
    e.preventDefault()
    if (searchTerm !== "") {
      setSearchValue(searchTerm)
      navigate("/recipes")
      setSearchTerm("")
    }
  }

  // toggles the value of `menuOpen` between `true` and `false`.
  const toggleMenu = () => (!menuOpen ? setMenuOpen(true) : setMenuOpen(false))

  return (
    <div ref={menuRef}>
      {" "}
      <header className="bg-customGreen h-[80px] flex items-center justify-between px-5 fixed top-0 right-0 left-0 z-20">
        {/* HOME BUTTON */}
        <Link to="/">
          <img src={logo} alt="App Logo" className="h-[70px]" />
        </Link>
        <div className="flex items-center">
          {/* SEARCH */}
          <div className="group">
            <form className="relative" onSubmit={handleSearchRecipe}>
              {" "}
              <input
                type="text"
                placeholder="Cerca"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={inputRef}
                onFocus={() => setSearchTerm(searchTerm)}
                className="transition-all duration-300 ease-in-out pr-2 pl-10 py-2 rounded-full focus:outline-none w-44"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-3 text-zinc-400 hidden group-focus-within:block hover:text-zinc-300"
              >
                <FaArrowRight />
              </button>
              <FaSearch className="absolute inset-y-2 left-3 text-customSand text-2xl stroke-2" />
            </form>
          </div>
          {/* MENU BUTTON */}
          <button className="lg:hidden">
            {" "}
            <IoMenu onClick={toggleMenu} className="text-white text-3xl ml-5" />
          </button>
          <div>
            <ul className="hidden lg:flex  p-4 list-none font-bold text-customSand">
              <li
                className="hover:text-customSand/70 px-4 cursor-pointer"
                onClick={closeMenu}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className="hover:text-customSand/70 px-4 cursor-pointer"
                onClick={closeMenu}
              >
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* MENU  */}
      <div
        className={`fixed top-[80px] right-0 left-0 bg-customSand z-10 text-center transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center p-4 list-none font-bold ">
          <li
            className="hover:border-b-2 hover:border-customGreen py-1 px-4 cursor-pointer"
            onClick={closeMenu}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="hover:border-b-2 hover:border-customGreen py-1 px-4 cursor-pointer"
            onClick={closeMenu}
          >
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default AppHeader
