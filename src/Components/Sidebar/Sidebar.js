import "./style.css";
import User from "../User/User.js";
import Sugestions from "../Sugestions/Sugestions";
import Trademark from "../Trademark/Trademark";


export default function Sidebar() {
    return (
        <div class="right-content">
            <User />
            <Sugestions />
            <Trademark />
        </div>
    )
}