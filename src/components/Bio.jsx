import "../css/index.css";

export default function Bio() {
  return (
    <div className="bio-container">
      <h1 className="title">
        Hello I am <span>Griffin Overmyer</span>
      </h1>

      <div className="bio-div">
        <p className="bio-text">
          I am sohpomore at Purdue University pursuing a degree in Web
          Development & Design
        </p>

        <blockquote
          id="quote"
          cite="https://onepercentbetter.com/motivational-quotes/"
        >
          A winner is a dreamer who never gives up.
        </blockquote>

        <p id="mandela-name">--Nelson Mandela</p>
      </div>
    </div>
  );
}
