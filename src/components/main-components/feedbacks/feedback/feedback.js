import './feedback.scss'
import {Link} from 'react-router-dom';
function Feedback({upvotes, title, description, category, comments, id, prop}) {
    return (
        <>
            
        <li  className='feedback'>
            <Link key={prop}className='link' to={`/feedback/${id}`}></Link>
            <button className='feedback__vote-btn'>
                <p className='feedback__vote-num'>{upvotes}</p>
            </button>
            
            <div className='feedback__content-wrapper'>
                <div className='feedback__content'>
                    <h3 className='feedback__title'>
                        {title}
                    </h3>
                    <p className='feedback__desc'>
                        {description}
                    </p>
                    <button className='feedback__button'>{category}</button>
                </div>
                <button className='feedback__comment-btn'>
                    <img className='feedback__comment-img'/>
                    <p className='feedback__comment-count'>{comments}</p>
                </button>
            </div>
        </li>
        </>
    )
}

export default Feedback