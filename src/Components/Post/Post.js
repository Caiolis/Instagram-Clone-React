import "./style.css";
import { useState } from "react";

// Posts Informations
const Itens = [
  {
    userImg: "./assets/img/delish-profile-pic.jpg",
    userName: "Delish",
    postImage: "./assets/img/gato-telefone 1.png",
    commentImage: "./assets/img/respondeai 2.png",
    commentUser: "respondeai",
    likedBy: 809,
  },
  {
    userImg: "./assets/img/barked 2.png",
    userName: "barked",
    postImage: "./assets/img/dog 1.png",
    commentImage: "./assets/img/adorableanimals 2.png",
    commentUser: "adorable_animals",
    likedBy: 603,
  },
  {
    userImg: "./assets/img/deschamps.jpg",
    userName: "filipedeschamps",
    postImage: "./assets/img/deschamps-post.jpg",
    commentImage: "./assets/img/adorableanimals 2.png",
    commentUser: "adorable_animals",
    likedBy: 202,
  },
];

// Posts Template
function MenuPost(props) {
  // Save Information
  const [saveIcon, setSaveIcon] = useState(
    <ion-icon name="bookmark-outline"></ion-icon>
  );
  const [isSaved, setIsSaved] = useState(false);

  // Like informations
  const [icon, setIcon] = useState("heart-outline");
  const [color, setColor] = useState("default md hydrated");
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(props.likedBy);

  // Likes the post, if the user clicked on the image it will only like, if the user clicked on the heart
  // It will like and dislike the post
  function like(clickedImage = false) {
    if (clickedImage) {
      setIcon("heart");
      setColor("red md hydrated");
      setLikesCount(props.likedBy + 1)
      setIsLiked(true);
    } else {
      if (!isLiked) {
        setIcon("heart");
        setColor("red md hydrated");
        setLikesCount(props.likedBy + 1)
        setIsLiked(true);
      } else {
        setIcon("heart-outline");
        setColor("default md hydrated");
        setLikesCount(props.likedBy)
        setIsLiked(false)
      }
    }
  }

  // Saves the post when the user click on the bookmark icon
  function save() {
    if (!isSaved) {
      setSaveIcon(<ion-icon name="bookmark"></ion-icon>);
      setIsSaved(true);
    } else {
      setSaveIcon(<ion-icon name="bookmark-outline"></ion-icon>);
      setIsSaved(false);
    }
  }

  return (
    <div class="posts-wrapper" data-test="post">
      {/* <!-- Upper Post Bar --> */}
      <div class="upper-post-bar">
        {/* <!-- Profile Desc --> */}
        <div class="profile-desc">
          <div class="image-wrapper">
            <img src={props.userImg} alt={props.userName} />
          </div>

          <div class="name-wrapper">
            <a href="#">{props.userName}</a>
          </div>
        </div>
        {/* <!-- Profile Desc End --> */}

        {/* <!-- Options --> */}
        <div class="options">
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
        {/* <!-- Options End--> */}
      </div>
      {/* <!-- Upper Post Bar End --> */}

      {/* <!-- Post Content --> */}
      <div class="post-content">
        <img
          src={props.postImage}
          alt="Foto do post"
          onClick={() => like(true)}
          data-test="post-image" 
        />
      </div>
      {/* <!-- Post Content End --> */}

      {/* <!-- Bottom Post Infos --> */}
      <div class="bottom-post-infos">
        {/* <!-- Icons Post Infos --> */}
        <div class="icons-post-infos">
          {/* <!-- Left post Infos --> */}
          <div class="left-post-infos">
            <span onClick={() => like()} data-test="like-post"><ion-icon name={icon} class={color}></ion-icon></span>
            <ion-icon name="chatbubble-outline" class="middle"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          {/* <!-- Left post Infos End--> */}

          {/* <!-- Right post Info --> */}
          <div class="right-post-info">
            <span onClick={() => save()} data-test="save-post">{saveIcon}</span>
          </div>
          {/* <!-- Right post Info End --> */}
        </div>
        {/* <!-- Icons Post Infos End --> */}

        {/* <!-- Liked by infos --> */}
        <div class="liked-by-infos">
          {/* <!-- Liked By Image --> */}
          <div class="liked-by-image">
            <img src={props.commentImage} alt={props.commentUser} />
          </div>
          {/* <!-- Liked By Image End -->  */}

          <div class="liked-by-desc">
            <span>
              Curtido por <strong>{props.commentUser}</strong> e{" "}
              <strong>outras <span data-test="likes-number">{likesCount}</span> pessoas</strong>
            </span>
          </div>
        </div>
        {/* <!-- Liked by infos End--> */}
      </div>
      {/* <!-- Bottom Post Infos End--> */}
    </div>
  );
}

// Generates the posts with a map
export default function Post() {
  return (
    <div class="posts">
      {Itens.map((item) => (
        <MenuPost
          userImg={item.userImg}
          userName={item.userName}
          postImage={item.postImage}
          commentImage={item.commentImage}
          commentUser={item.commentUser}
          likedBy={item.likedBy}
        />
      ))}
    </div>
  );
}
