import "./style.css";

export default function User() {
    return (
        <div class="profile-infos">
                {/* <!-- Profile Image --> */}
                <div class="profile-image">
                    <img src="./assets/img/catanacomics 1.png" alt="Profile Pic" />
                </div>
                 {/* <!-- Profile Image End --> */}

                 {/* <!-- Profile Desc --> */}
                 <div class="profile-desc">
                    <p class="profile-name">catanacomics<br /><span class="sub-name">Catarina</span></p>
                 </div>
                 {/* <!-- Profile Desc End--> */}
            </div>
    );
}