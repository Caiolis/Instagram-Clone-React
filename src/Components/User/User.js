import "./style.css";
import { useState } from "react";

export default function User() {
  // States
  const [userName, setUserName] = useState("Guest");
  const [userImage, setUserImage] = useState("./assets/img/catanacomics 1.png");

  // Changes the name of the user when the pencil is clicked.
  function changeUserName() {
    let name = prompt("Digite o nome do usuário");

    // If the name is empty, it returns nothing, if it is not, it updates the name.
    if (!name) {
      return;
    } else {
      setUserName(name);
    }
  }

  // Changes the image of the user when the image is clicked.
  function changeUserImage() {
    let image = prompt("Enter your image url");

    // If the image is empty, it returns nothing, if it is not, it updates the image.
    if (!image) {
      return;
    } else {
      setUserImage(image);
    }
  }

  return (
    <div class="profile-infos">
      {/* <!-- Profile Image --> */}
      <div class="profile-image user-image" >
        <img src={userImage} alt="Profile Pic" onClick={changeUserImage} data-test="profile-image"/>
      </div>
      {/* <!-- Profile Image End --> */}

      {/* <!-- Profile Desc --> */}
      <div class="profile-desc" onClick={changeUserName} data-test="edit-name">
        <p class="profile-name" data-test="name"> 
          {userName} <ion-icon name="pencil-outline"></ion-icon>
        </p>
      </div>
      {/* <!-- Profile Desc End--> */}
    </div>
  );
}
