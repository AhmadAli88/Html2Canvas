import { useRef } from 'react';
import html2canvas from 'html2canvas';

const StyledScreenshot = () => {
  const componentRef = useRef();

  const handleCapture = () => {
    if (componentRef.current) {
      html2canvas(componentRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'styled-component.jpg';
        link.click();
      });
    }
  };

  return (
    <div>
      <div
        ref={componentRef}
        style={{
          padding: '20px',
          border: '2px dashed #888',
          background: 'linear-gradient(to bottom, #ff9a9e, #fad0c4)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h1>Styled Component</h1>
        <p>This component will be exported with styles intact.</p>
      </div>
      <button onClick={handleCapture}>Capture Styled Component</button>
    </div>
  );
};

export default StyledScreenshot;
