import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SimplePDFBookmark, SimplePdfViewerComponent } from 'simple-pdf-viewer';
declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { 
    // this.spc.setZoomInPercent(20)
  }
  ngOnInit(): void {
    
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
