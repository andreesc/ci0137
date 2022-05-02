import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DiscountAdvise} from "../components/promotional/DisccountAdvise"
import  { NavBar }  from "../components/ui/NavBar"
import { Home } from "../pages/Home/Home"
import {BiSearch, BiCart} from "react-icons/bi"
import { Logo } from "../components/ui/Logo"

export const AppRouter = () => {
    return (
        <>
            <DiscountAdvise />
            <NavBar />
            <div className="flex px-4 md:px-8 lg:px-20 py-4">
                <div class="w-6/12">
                    <Logo />
                </div>
                <div className="w-6/12 flex gap-3 items-center justify-end">
                    <p>¡Bienvenido!</p>
                    <BiSearch className="cursor-pointer" />
                    <BiCart className="cursor-pointer" />
                </div>
            </div>
            <div className="w-full flex px-4 md:px-8 lg:px-20 py-4">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}