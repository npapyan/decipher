'use client'

import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Counter from './components/counter';
import FileUpload from './components/FileUpload';
import UploadView from './views/UploadView';
import LiveCameraButton from './components/LiveCamera';

export default function Home() {
  const [buttonTitle, setButtonTitle] = useState("Hello World");

  useEffect(() => {
      document.title = 'Decipher';
  }, []);

  const onButtonClick = () => {
    if (buttonTitle === "Hello World") {
      setButtonTitle("Goodbye");
    } else {
      setButtonTitle("Hello World");
    }
  }

  return (
    <div>
      <h1 className="text-center text-4xl mt-4">Decipher</h1>
      <h3 className="text-center text-2xl mb-4 text-gray-400">Upload or Scan a barcode below to view analysis</h3>
      <div className="flex mx-auto items-center justify-center">
        <div className="m-2">
          <LiveCameraButton />
        </div>
      </div>
    </div>
  )
}
