import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'; 

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }


  render() {
    const { pageNumber} = this.state;

    return (
      <div>
        <center>
        <Document
          file="/Resume.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        </center>
      </div>
    );
  }
}

export default Resume;