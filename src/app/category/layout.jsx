import React from 'react'
import BlogCat from './BlogCat'

export default function Layouts({children}) {
  return (
    <div>
        <div>
            <BlogCat/>
        </div>
        
        {children}
        </div>
  )
}
