import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DiscountAdvise} from "../components/promotional/DisccountAdvise"
import  { NavBar }  from "../components/ui/NavBar"
import { Home } from "../pages/Home/Home"
import {BiCart} from "react-icons/bi"
import { Logo } from "../components/ui/Logo"
import { SearchButton } from "../components/SearchButton"
import { Modal } from "../components/Modal"
import { useEffect, useState } from "react"

export const AppRouter = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [promotionalText, setPromotionalText] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const handleModal = () => {
        setIsOpen((prev) => setIsOpen(!isOpen))
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    useEffect(() => {
        const fetchPromo = async () => {
            const promoFetch = await fetch("https://api.ticolitas.com/alertas");
            const promoBody = await promoFetch.json();
            setPromotionalText(promoBody[0].alerta);
            setIsLoading(false);
        }
        fetchPromo();
    }, [])

    if (isLoading) {
        return <div>
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
        </div>
    }

    return (
        <>
            { isOpen && 
                <Modal 
                    title="Búsqueda de artículos"
                    closeModal={closeModal} 
                >
                    <input 
                        placeholder="Introduzca el producto a buscar..." 
                        className="border border-gray-200 rounded-md w-full p-2" 
                    />
                </Modal> 
            }
            {
                promotionalText && 
                    <DiscountAdvise 
                        text={promotionalText} 
                    />
            }
            <NavBar />
            <div className="flex px-4 md:px-8 lg:px-20 py-4">
                <div className="w-6/12">
                    <Logo width="16" height="16" />
                </div>
                <div className="w-6/12 flex gap-3 items-center justify-end">
                    <p>¡Bienvenido!</p>
                    <SearchButton onClick={handleModal} />
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