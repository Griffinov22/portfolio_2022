export default function Works() {
  return (
    <section id="works-section">
      <h2 className="section-header">
        Works & Projects <hr />
      </h2>

      <div className="works-flex-container">
        <div
          className="works-flex-item"
          onClick={() => window.open("https://www.coffeelogic.me")}
        >
          <img className="works-pic" src="/coffee-logic.jpg" />
          <p className="works-caption">CoffeeLogic Website</p>
        </div>

        <div
          className="works-flex-item"
          onClick={() =>
            window.open("https://griffin-summer-project-2022.netlify.app/")
          }
        >
          <img className="works-pic" src="/weather-app.jpg" />
          <p className="works-caption">Weather App </p>
        </div>

        <div
          className="works-flex-item"
          onClick={() =>
            window.open(
              "https://business-card-react-parallax-tilt-js.netlify.app/"
            )
          }
        >
          <img className="works-pic" src="/business-card.jpg" />
          <p className="works-caption">Business Card</p>
        </div>

        <div
          className="works-flex-item"
          onClick={() =>
            window.open("https://travel-site-griffin.netlify.app/")
          }
        >
          <img className="works-pic" src="/travel-site.jpg" />
          <p className="works-caption">Travel book Mock</p>
        </div>

        <div
          className="works-flex-item"
          onClick={() => window.open("https://air-bnb-template.netlify.app/")}
        >
          <img className="works-pic" src="/air-bnb.jpg" />
          <p className="works-caption">AirBnB Template</p>
        </div>

        <div className="works-flex-item">
          <img
            className="works-pic"
            src="/dice-game.jpg"
            onClick={() =>
              window.open("https://griffin-hold-dice-game.netlify.app/")
            }
          />
          <p className="works-caption">Dice Game (Desktop)</p>
        </div>
      </div>

      <a href="#nav">
        <button type="button" id="to-top-btn">
          --Back To Top--
        </button>
      </a>
    </section>
  );
}
