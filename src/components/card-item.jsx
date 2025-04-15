import React from 'react'
import '../assets/css/card-item.css'

export default function CardItem({data,dataIndex}) {
  // const imgUrl = data.thumbnail;
  const imgUrl2 = 'https://www.themancompany.com/cdn/shop/products/3_25eeb22b-c286-43bf-b4ea-b791bad68ee8.jpg?v=1671688655'

  return (
    <div className='card-item'>
      
      <div className='thumbnail'>
        <img src={imgUrl2}/>
      </div>

      <div className="title-category">

        <div className='product-title'>
          {data.title}
        </div>

        <div className='product-category'>
          <i>{data.category}</i>
        </div>

      </div>

      <div className='product-description'>
        {data.description}
      </div>

      <div className='addCart'>
        <div className="price">
          $ {data.price}
        </div>
        <button className='addToCart'>
          Add to cart
        </button>
      </div>

    </div>
  )
}
