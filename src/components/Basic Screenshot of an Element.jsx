import { useRef } from 'react';
import html2canvas from 'html2canvas';

const BasicScreenshot = () => {
  const divRef = useRef();

  const handleCapture = () => {
    if (divRef.current) {
      html2canvas(divRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'screenshot.png';
        link.click();
      });
    }
  };

  return (
    <div>
      <div ref={divRef} style={{ padding: '20px', border: '1px solid black', textAlign: 'center' }}>
        <h1>Hello, World!</h1>
        <p>This will be captured as an image.</p>
      </div>
      <button onClick={handleCapture}>Capture Screenshot</button>
    </div>
  );
};

export default BasicScreenshot;
