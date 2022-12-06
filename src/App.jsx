import Header from "./components/Header";
import Bio from "./components/Bio";
import SkillsAndKnowledge from "./components/skills";
import Works from "./components/Works";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Header />
      <Bio />
      <SkillsAndKnowledge />
      <Works />

      <Helmet>
        <script src="index.js" type="text/javascript"></script>
      </Helmet>
    </>
  );
}
export default App;
