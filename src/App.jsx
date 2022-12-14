import "./App.css";

function App() {
  return (
    <div className="test">
      <div className="test__mainInfo">
        <img
          src="../base-apparel-coming-soon-master/images/logo.svg"
          className="test__mainInfo-logo"
        />
        <h1 className="test__mainInfo-title">
          <span>WE'RE </span>
          COMING SOON
        </h1>
        <div className="test__mainInfo-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nulla
          eaque vero voluptate id dolor tempore corporis est autem officiis?
        </div>
        <div className="test__mainInfo-form">
          <div className="test__mainInfo-form__text">Enter your email</div>
          <div className="test__mainInfo-form__btn">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="test__img">
        <img
          src="../base-apparel-coming-soon-master/images/hero-desktop.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
