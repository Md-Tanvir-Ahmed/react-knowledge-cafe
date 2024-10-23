
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }


  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

  }
  

  

  return (
    <>
      <Header className="max-w-7xl mx-auto"></Header>
      <div className='md:flex lg:flex max-w-7xl mx-auto'>
      <Blogs 
       handleAddToBookmark={handleAddToBookmark}
       handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
