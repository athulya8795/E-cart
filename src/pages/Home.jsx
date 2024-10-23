import React from 'react'
import useFetch from '../hooks/UseFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addWishlistItem } from '../redux/slices/slices/wishlistSlice';
import { addItemCart } from '../redux/slices/slices/cartSlice';

function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  return (
    <>
      <div className='pt-40 px-10 mb-10 md:grid grid-cols-4'>
        {data?.length > 0 &&
          data.map((item) => (
            <div className="p-2">
              <div className='p-3 rounded shadow-lg'>
                <img src={item?.image} alt="no image" className='w-full h-60' />
                <h1 className='text-center text-2xl'>{item?.title.slice(0, 25)}...</h1>
                <p className='text-justify'>{item?.description.slice(0, 70)}...</p>
                <p className='text-2xl'>Price:<span className='tex-voilet-600'>${item?.price}</span></p>
                <div className='flex justify-between'>
                  <button onClick={() => dispatch(addWishlistItem(item))} className='p-3 rounded bg-red-700 text-white hover:bg-white hover:border hover:border-red-600 hover:text-red-600'><FontAwesomeIcon icon={faHeart} /></button>
                  <button onClick={() => dispatch(addItemCart(item))} className='p-3 rounded bg-green-700 text-white hover:bg-white hover:text-red-900'><FontAwesomeIcon icon={faCartShopping} /></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Home