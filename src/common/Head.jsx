
const Head = () => {
  return (
    <>
      <section className=''>
        <div className='flex w-full px-6  sm:px-16  lg:px-36 xl:px-48 my-0 py-1 justify-center md:justify-between items-center navbar z-20'>
          <div className='hidden md:flex justify-between ' >
            <p className='phonenumber mr-6 text-sm '>+234 (803) 2786 7601</p>
            <p className='email text-sm'>info@goschool.com</p>
          </div>

          <div className='flex items-center'>
            <span className="text-sm pr-2">Follow Us: </span>
            <i className='fab fa-facebook-f icon text-sm'></i>
            <i className='fab fa-instagram icon text-sm'></i>
            <i className='fab fa-twitter icon text-sm'></i>
            <i className='fab fa-youtube icon text-sm'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
