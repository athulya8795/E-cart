import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'>
      <div>
        <h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} className='me-3' />E-CART</h1>
        <p className='text-justify mt-4 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum explicabo accusamus omnis excepturi? Reiciendis quae porro ipsam ex, neque voluptas eveniet amet tenetur, alias explicabo quos commodi quidem, labore cum.s eveniet amet tenetur, alias explic</p>
      </div>
      <div className='md:flex justify-center mt-10 md:mt-0'>
      <div>
        <h1 className='text-3xl'>LINKS</h1>
        <Link to={'/'}><p className='mt-4'>Home</p></Link>
        <Link to={'/wishlist'}><p className='mt-4'>Wishlist</p></Link>
        <Link to={'/cart'}><p className='mt-4'>Cart</p></Link>
      </div>
      </div>
      <div className='md:flex justify-center mt-10 md:mt-0'>
      <div>
        <h1 className='text-3xl'>GUIDES</h1>
        <p className='mt-4'>React</p>
        <p className='mt-4'>React Bootstrap</p>
        <p className='mt-4'>Bootswwatch</p>
      </div>
      </div>
      <div className='md:px-10 mt-5 md:mt-0'>
        <h1 className='text-3xl'>CONTACT US</h1>
        <div className='flex mt-4'>
          <input type="text" placeholder='Email' className='w-5/6 p-2' />
          <button className='py-2 px-3 p-2 bg-orange-500'>Subscribe</button>
        </div>
        <div className='flex justify-between mt-5'>
        <FontAwesomeIcon icon={faXTwitter} className='text-3xl mt-4' />
        <FontAwesomeIcon icon={faLinkedin} className='text-3xl mt-4' />
        <FontAwesomeIcon icon={faInstagram} className='text-3xl mt-4' />
        <FontAwesomeIcon icon={faFacebook} className='text-3xl mt-4' />
        </div>
      </div>
    </div>
  )
}

export default Footer