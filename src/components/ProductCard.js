export const ProductCard = ({name, image, price}) => {
    return ( 
        <div className="border rounded-sm">
            <img src={image} alt={name} />
            <div className="flex flex-col">
                {name}
                {price}
            </div>
        </div>
    )
}