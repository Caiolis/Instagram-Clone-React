import "./style.css";

// Stories Informations
const Itens = [
  {
    img: "./assets/img/9gag 1.png",
    user: "9gag",
  },
  {
    img: "./assets/img/meowed 1.png",
    user: "meowed",
  },
  {
    img: "./assets/img/nathanwpylestrangeplanet 1.png",
    user: "nathanwpyle...",
  },
  {
    img: "./assets/img/wawawiwacomicsa 1.png",
    user: "wawawiwac...",
  },
  {
    img: "./assets/img/respondeai 1.png",
    user: "respondeai",
  },
  {
    img: "./assets/img/9gag 1.png",
    user: "9gag",
  },
  {
    img: "./assets/img/meowed 1.png",
    user: "filomoderna",
  },
  {
    img: "./assets/img/memeriagourmet 1.png",
    user: "memeriago",
  },
];

// Stories Templates
function StoriesComponents(props) {
  return (
    <div class="stories-account">
      <div class="stories-pic">
        <img src={props.img} alt="stories pic" />
      </div>
      <span>{props.user}</span>
    </div>
  );
}

// Stories being created by a map
export default function Stories() {
  return (
    <div class="stories-bar">
      <div class="icon-stories">
        <img src="./assets/img/Vector.png" class="shadow" />
      </div>
      {/* <!-- Stories account --> */}
      {Itens.map((item) => (
        <StoriesComponents img={item.img} user={item.user} />
      ))}
      {/* <!-- Stories account End--> */}
    </div>
  );
}
