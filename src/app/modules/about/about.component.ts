import { Component, OnInit, ViewChild } from '@angular/core';
import { SimplePDFBookmark, SimplePdfViewerComponent } from 'simple-pdf-viewer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // @ViewChild(SimplePdfViewerComponent) private pdfViewer: SimplePdfViewerComponent;
  // bookmarks: SimplePDFBookmark[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
