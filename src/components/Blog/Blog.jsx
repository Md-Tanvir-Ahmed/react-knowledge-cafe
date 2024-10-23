import PropTypes from 'prop-types';
import { MdBookmarkBorder } from "react-icons/md";

const Blog = ({ blog, handleAddToBookmark }) => {
    const {title, cover, reading_time,author, author_img , posted_date, hashtags} = blog;
    console.log(blog)
    return (
        <div className='mb-20'>
            <img className='w-full  mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between">
                <div className='flex '>
                    <img className="w-[60px] h-[60px] rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>

                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl '><MdBookmarkBorder /></button>

                </div>

            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='mr-2'><a href="">{hash}</a></span>)
                }
            </p>

        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;