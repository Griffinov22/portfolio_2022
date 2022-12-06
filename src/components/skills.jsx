export default function SkillsAndKnowledge() {
  return (
    <section id="skills-box" className="skills-container">
      <h2 className="section-header">
        Skills & Knowledge
        <hr />
      </h2>

      <div className="flex-container">
        <div className="grid-item html-highlight">
          <img src="/svg-folder/html.svg" />
          <h3>HTML5</h3>
        </div>

        <div className="grid-item css-highlight">
          <img src="/svg-folder/css.svg" />
          <h3>CSS3</h3>
        </div>

        <div className="grid-item js-highlight">
          <img src="/svg-folder/javascript.svg" />
          <h3>JavaScript</h3>
        </div>

        <div className="grid-item python-highlight">
          <img src="/svg-folder/python.svg" />
          <h3>PYTHON</h3>
        </div>

        <div className="grid-item js-highlight">
          <img src="/svg-folder/react.svg" />
          <h3>React</h3>
        </div>

        <div className="grid-item css-highlight">
          <img src="/svg-folder/sass.svg" />
          <h3>SASS</h3>
        </div>

        <div className="grid-item adobe-highlight">
          <img src="/svg-folder/adobe-illustrator.svg" />
          <h3>Illustrator</h3>
        </div>

        <div className="grid-item adobe-highlight">
          <img src="/svg-folder/adobe-photoshop.svg" />
          <h3>Photoshop</h3>
        </div>

        <div className="grid-item vs-code-highlight">
          <img src="/svg-folder/visual-studio-code.svg" />
          <h3>VS Code</h3>
        </div>
      </div>
    </section>
  );
}
