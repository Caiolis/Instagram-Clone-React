import "./style.css";
import Stories from "../Stories/Stories";
import Sidebar from "../Sidebar/Sidebar";
import Post from "../Post/Post";
import Mobilebar from "../Mobilebar/Mobilebar";

export default function Body() {
    return (
        <div class="content-container">
            <div class="left-content">
                <Stories />
                <Post />
            </div>

            <Sidebar />
            <Mobilebar />
        </div>
    )
}