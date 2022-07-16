import FeedbacksList from "../main-components/feedbacks/feedbacks-list";
import MainHeader from "../main-components/header/header";
import Sidebar from "../side-bar/sidebar";
import './main.scss';

function Main(){
    return (
        <>
        <Sidebar />
        <div className="main">
            
            <MainHeader/>
            <FeedbacksList/>
            
        </div></>
    )
}

export default Main