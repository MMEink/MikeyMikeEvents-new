import React from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import FooterView from "../FooterView";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 700;
const height = 800;
const pages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

export default function WeddingBrochure() {
  return (
    <div className="brochure">
      <Document file={require(`./pdfs/Wedding-Brochure-2023.pdf`)}>
        <HTMLFlipBook width={width} height={height}>
          {pages.map((i) => (
            <div className="demoPage">
              <Page pageNumber={i} />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
      <FooterView />
    </div>
  );
}
