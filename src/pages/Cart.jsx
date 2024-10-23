import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptycart, removeCart } from '../redux/slices/slices/cartSlice'

function Cart() {
  const [total, setTotal] = useState()
  const dispatch = useDispatch()
  const cartlist = useSelector(state => state.cartitem)
  const navigate = useNavigate()

  const getTotal = () => {
    if (cartlist?.length>0)
    {
      setTotal(cartlist?.map((item) => item.price)?.reduce((n1, n2) => n1 + n2))
      
    }
  }
  console.log(total);

  const handleCheckOut =()=>{
    alert('Order Placed Successfully')
    dispatch(emptycart)
    navigate('/')
  }
  useEffect(() => {
    getTotal()
  }, [cartlist])



  return (
    <>
      <div className='pt-32'>
        <h1 className='text-center text-4xl text-violet-900'>Cart</h1>
        {cartlist?.length > 0 ?
          <div className='md:grid grid-cols-[2fr_1fr] my-10'>
            <div className='md:py-5 md:px-20'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='border border-gray-100 p-3 bg-gray-500 text-white'>#</th>
                    <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Title</th>
                    <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Image</th>
                    <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Price</th>
                    <th className='border border-gray-100 p-3 bg-gray-500 text-white'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartlist.map((item, index) => (<tr>
                    <td className='border border-gray-100 p-3'>{index + 1}</td>
                    <td className='border border-gray-100 p-3'>{item.title}</td>
                    <td className='border border-gray-100 p-3 flex justify-center'><img src={item.image} alt="no image" style={{ width: '100px', height: '100px' }} /></td>
                    <td className='border border-gray-100 p-3'>${item.price}</td>
                    <td className='border border-gray-100 p-3 text-center'><button onClick={() => dispatch(removeCart(item.id))} className='bg-red-700 p-3 text-white rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
                  </tr>))
                  }
                </tbody>
              </table>
            </div>
            <div className='pt-5 px-10'>
              <div className='p-5 shadow-lg'>
                <h1 className='text-center text-3xl'>Cart Summary</h1>
                <p className='mt-4 text-xl'>Total number of products :{cartlist?.length}</p>
                <p className='mt-2 text-xl'>GrandTotal : $ {total}</p>
                <button onClick={handleCheckOut} className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>CheckOut</button>
              </div>
            </div>
          </div>
          :
          <div className='w-full mt-10 md:grid grid-cols-3'>
            <div></div>
            <div className='flex justify-center items-center flex-col my-10'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dCoIn5Ba8g1qCBrTYS1mhE7pJ57wJpQcDQ&s" alt="no image" className='w-full h-80' />
              <p className='text-violet-800 text-3xl'>Your Cart Is Empty</p>
              <Link to={'/'}><button className='bg-green-600 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2' />Back Home</button></Link>
            </div>
            <div></div>
          </div>}
      </div>
    </>
  )
}

export default Cart