import React from 'react'
import error from '../../Assets/images/error.svg'

export default function NotFound() {
  return (
    <div className=' vh-100'>
      <div className=' d-flex justify-content-center align-items-center h-100'>
        <img src={error} alt='error-img' className='w-100' />  
      </div>
    </div>
  )
}
