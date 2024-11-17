import  { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const DynamicContentScreenshot = () => {
  const [message, setMessage] = useState('Default Message');
  const contentRef = useRef();

  const handleCapture = () => {
    if (contentRef.current) {
      html2canvas(contentRef.current).then((canvas) => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'dynamic-content.png';
        link.click();
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div ref={contentRef} style={{ padding: '20px', border: '1px solid black', marginTop: '10px' }}>
        <h1>{message}</h1>
      </div>
      <button onClick={handleCapture}>Capture Dynamic Content</button>
    </div>
  );
};

export default DynamicContentScreenshot;
