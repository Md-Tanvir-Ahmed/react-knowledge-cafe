
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks =({bookmarks, readingTime})  => {
    return(
        <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4'>
            <div className="bg-white mb-2 w-11/12 rounded-lg mx-auto">
                <h3 className="text-4xl text-center ">Reading time: {readingTime} min</h3>
            </div>
            <h2 className='text-3xl text-center '>Bookmarked Blogs: {Bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks;