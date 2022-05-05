export const ProductCard = ({name, image, price}) => {
    return ( 
        <div className="border rounded-md border-gray-300">
            <img src={image} alt={name} />
            <div className="flex flex-col p-4">
                <h1 className="font-bold">{name}</h1>
                <p className="font-light">${price}</p>
            </div>
        </div>
    )
}