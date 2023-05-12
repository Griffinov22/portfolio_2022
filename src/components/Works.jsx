export default function Works() {
  return (
    <section id="works-section">
      <h2 className="section-header">
        Works & Projects <hr />
      </h2>

      <div className="works-flex-container">
        <div
          className="works-flex-item"
          data-knowledge="Semester long project to build a site from with HTML, CSS, JS, PHP"
          onClick={() => window.open("https://coffee-logic.netlify.app/")}
        >
          <img className="works-pic" src="/coffee-logic.jpg" />
          <p className="works-caption">CoffeeLogic Website</p>
        </div>

        <div
          className="works-flex-item"
          data-knowledge="Directed Tech Committee of Purdue Student Government to develop and update a
          website that displays current news and announcements"
          onClick={() => window.open("https://purduesg.org/")}
        >
          <img className="works-pic" src="/student-gov.jpg" />
          <p className="works-caption">Purdue Student Government</p>
        </div>

        <div
          className="works-flex-item"
          data-knowledge="Over this summer (2022) I taught myself the basics of JavaScript. This is a project I am very proud of that involves API requests to get the weather (REST API)."
          onClick={() =>
            window.open("https://griffin-summer-project-2022.netlify.app/")
          }
        >
          <img className="works-pic" src="/weather-app.jpg" />
          <p className="works-caption">Weather App </p>
        </div>

        <div
          className="works-flex-item"
          data-knowledge="This business card was built with React.js and Tilt.js frameworks...if your okay with calling React.js a framework"
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
          data-knowledge="I built this mock traveling journal to test my skills with React when I was learning the basics."
          onClick={() =>
            window.open("https://travel-site-griffin.netlify.app/")
          }
        >
          <img className="works-pic" src="/travel-site.jpg" />
          <p className="works-caption">Travel book Mock</p>
        </div>

        <div
          className="works-flex-item"
          data-knowledge="This site was built near the end of the React.js tutorial I took over the summer (2022). It uses the React 'state' hook along with api request to determine the availability of the users."
          onClick={() => window.open("https://air-bnb-template.netlify.app/")}
        >
          <img className="works-pic" src="/air-bnb.jpg" />
          <p className="works-caption">AirBnB Template</p>
        </div>

        <div
          className="works-flex-item"
          data-knowledge="This app was created with the soul purpose of learning the core of JavaScript. It is risk based game to see which player can get 100pts. If you need more explanation, see my github."
          onClick={() =>
            window.open("https://griffin-hold-dice-game.netlify.app/")
          }
        >
          <img className="works-pic" src="/dice-game.jpg" />
          <p className="works-caption">Dice Game</p>
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
