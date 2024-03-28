import { useState } from "react"
import { IProduct } from "../../public/models"

interface ProductProps {
  product: IProduct
}

export function Product({product}:ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClasssName = details ? 'bg-blue-400' : 'bg-yellow-400'

  const btnClasses = ['py-2 px-4 border', btnBgClasssName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <h3>{ product.title }</h3>
      <span className="font-bold">{product.price}$</span>
      <button 
        onClick={() => setDetails(prev => !prev)} 
        className={btnClasses.join(' ')}>
          {details ? 'hide details' : 'show details'}
      </button>

      {details && <div >
        <p>{product.description}</p>
        <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
      </div>}
    </div>
  )
}