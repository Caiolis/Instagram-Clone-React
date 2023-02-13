import "./style.css";

// Sugestions Information
const Itens = [
  {
    img: "./assets/img/badvibesmemes 1.png",
    user: "bad.vibes.memes",
    status: "Segue você",
  },
  {
    img: "./assets/img/chibirdart 1.png",
    user: "chibirdart",
    status: "Segue você",
  },
  {
    img: "./assets/img/razoesparaacreditar 1.png",
    user: "razoesparaacreditar",
    status: "Novo no Instagram",
  },
  {
    img: "./assets/img/adorableanimals 2.png",
    user: "adorable_animals",
    status: "Segue você",
  },
  {
    img: "./assets/img/smallcutecats 1.png",
    user: "smallcutecats",
    status: "Segue você",
  },
];

function SugestionsTemplate(props) {
  return (
    <div class="profile-infos profile-gap">
      {/* <!-- Profile-infos-right --> */}
      <div class="profile-infos-right">
        {/* <!-- Profile Image --> */}
        <div class="profile-image">
          <img class="card-image" src={props.img} alt="Profile Pic" />
        </div>
        {/* <!-- Profile Image End --> */}

        {/* <!-- Profile Desc --> */}
        <div class="profile-desc">
          <p class="profile-name">
            {props.user}
            <br />
            <span class="sub-name card-follow">{props.status}</span>
          </p>
        </div>
        {/* <!-- Profile Desc End--> */}
      </div>
      {/* <!-- Profile-infos-right End--> */}

      {/* <!-- Profile infos left --> */}
      <div class="profile-infos-left">
        <a href="#">Seguir</a>
      </div>
      {/* <!-- Profile infos left End --> */}
    </div>
  );
}

export default function Sugestions() {
  return (
    <div class="follow">
      {/* <!-- You may like it --> */}
      <div class="you-may-like-it">
        {/* <!-- You may Like it Right --> */}
        <div class="may-like-it-right">
          <span>Sugestões para você</span>
        </div>
        {/* <!-- You may Like it Right End--> */}

        {/* <!-- You May like it Left --> */}
        <div class="may-like-it-left">
          <a href="#">Ver tudo</a>
        </div>
        {/* <!-- You May like it Left End--> */}
      </div>
      {/* <!-- You may like it end--> */}

      {/* <!-- Cards Wrapper --> */}
      <div class="cards-wrapper">
        {Itens.map((item) => (
          <SugestionsTemplate
            img={item.img}
            user={item.user}
            status={item.status}
          />
        ))}
      </div>
      {/* <!-- Cards Wrapper End --> */}
    </div>
  );
}
