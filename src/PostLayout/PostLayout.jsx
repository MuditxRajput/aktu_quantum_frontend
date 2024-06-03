import React from 'react'
import HomepageReturn from '../Components/HomepageReturn'

const PostLayout = () => {
  return (
    <>
      <div className='m-[50px] sm:m-[120px] border-2 border-black flex flex-col sm:flex-row'>
        <div className='border-2 border-red-700 w-full sm:w-[876px] flex flex-col'>
          <div className='border-2 border-yellow-400 p-4'>
            <h1>Title</h1>
          </div>
          <div className='border-2 border-purple-500 p-4'>
            responsive ads
          </div>
          <div className='p-4'>
            image
          </div>
          <div className='p-4'>
            response ads
          </div>
          <div className='p-4'>
            <HomepageReturn/>
          </div>
          <div className='p-4'>
            response ads
          </div>
          <div className='p-4'>
            Articles
          </div>
        </div>
        <div className='border-2 border-green-600 w-full sm:w-[300px] flex flex-col p-4'>
          <div className='mb-4'>
            Responsive ads
          </div>
          <div>
            Link for more pages
          </div>
        </div>
      </div>
    </>
  )
}

export default PostLayout
