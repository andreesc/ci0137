import {BiSearch } from "react-icons/bi"

export const SearchButton = ({onClick}) => {

    return (
        <>
            <BiSearch className="cursor-pointer" onClick={onClick}  />
        </>
    )
}