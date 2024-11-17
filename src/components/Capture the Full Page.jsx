import { useEffect } from 'react';
import html2canvas from 'html2canvas';

const FullPageScreenshot = () => {
  const handleCapture = () => {
    html2canvas(document.body).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'full-page-screenshot.png';
      link.click();
    });
  };

  useEffect(() => {
    handleCapture();
  }, []);

  return (
    <div>
      <h1>Capturing the entire page...</h1>
      <p>Check your downloads for the screenshot.</p>
    </div>
  );
};

export default FullPageScreenshot;
