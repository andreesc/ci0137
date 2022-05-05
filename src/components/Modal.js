import { useEffect, useRef } from "react"

export const Modal = ({children, title, closeModal}) => {

    return (
        <div className="w-screen h-screen bg-slate-900 opacity-90 fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center">
            <div className="bg-white p-4 w-1/2 rounded-md opacity-100">
                <div className="flex justify-end cursor-pointer font-bold text-slate-500" onClick={closeModal}>
                    x
                </div>
                <div className="font-bold text-xl text-center">{title}</div>
                <div className="flex items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}