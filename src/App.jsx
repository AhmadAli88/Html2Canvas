import './App.css';
import DynamicContentScreenshot from './components/Capture Dynamic Content';
// import BasicScreenshot from './components/Basic Screenshot of an Element';
// import FullPageScreenshot from './components/Capture the Full Page';
import StyledScreenshot from './components/Download a Styled Component';
import SaveAsPDF from './components/Generate and Save as PDF';

function App() {
  return (
    <div>
      {/* <BasicScreenshot />
      <FullPageScreenshot/> */}
      <StyledScreenshot/>
      <SaveAsPDF/>
      <DynamicContentScreenshot/>
    </div>
  );
}

export default App;
