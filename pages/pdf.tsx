import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron\webviewer';

// need to use PDFviewer - already installed

export default function ViewPDF () {
  useEffect(()=> {
    WebViever({path:'lib' initialDoc: '..\.next\static\pdfs\PAC 30 02.pdf'}
  }, [])
    const viewerDiv = useRef<HTMLDivElement>(null);
    return (
      <div className = 'webviewer' ref = {viewerDiv}>
    
      </div> 
    )
    }