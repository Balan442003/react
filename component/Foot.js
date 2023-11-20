import React from 'react'

const Foot = () => {
  const date =new Date();
  const year=date.getFullYear();
  return (
    <div className='fixed-bottom container-fluid bg-dark text-white'>
      <p><center><b>Copyright &copy; {year}</b></center></p>
    </div>
  )
}

export default Foot
