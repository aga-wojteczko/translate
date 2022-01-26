import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer'; //module not found


export default function ViewPDF () {
  useEffect(()=> {
    WebViewer({path:'lib' , initialDoc: '../.next/static/pdfs/PAC 30 02.pdf' }, viewerDiv.current as HTMLElement).then(instance => {

    });
  }, [])
    const viewerDiv = useRef<HTMLDivElement>(null);
    return (
      <div className='webviewer' ref={viewerDiv}>
    
      </div> 
    )
    }