import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SaveAsPDF = () => {
  const pdfRef = useRef();

  const handleSavePDF = () => {
    if (pdfRef.current) {
      html2canvas(pdfRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('document.pdf');
      });
    }
  };

  return (
    <div>
      <div ref={pdfRef} style={{ padding: '10px', backgroundColor: '#f3f3f3' }}>
        <h1>Save This as a PDF</h1>
        <p>This content will be converted to a PDF document.</p>
      </div>
      <button onClick={handleSavePDF}>Download PDF</button>
    </div>
  );
};

export default SaveAsPDF;
