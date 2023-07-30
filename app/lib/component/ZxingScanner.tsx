// import { useEffect, useRef } from 'react';
'use client'
import { BrowserBarcodeReader } from '@zxing/library';

export default function ZxingScanner({ setFoodData }: any) {
    // Initialize the code reader once the component mounts
    const codeReader = new BrowserBarcodeReader();
    console.log('ZXing code reader initialized');

  const startScanner = () => {
    // Get the video stream from the camera
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } }) // Use 'environment' for rear camera, 'user' for front camera
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.playsInline = true;

        // Attach the video to the DOM to show the camera viewer
        document.body.appendChild(video);
        video.play();

        // Decode frames from the video stream
        codeReader.decodeFromVideoDevice(null, video, (result, error) => {
            if (result) {
              // Barcode detected
              console.log(result);
              alert(result.getText());

                async function fetchData() {
                    const data = await getData(result.getText());
                    console.log(data);
                    if (data) {
                        // setIsCameraEnabled(false);
                        console.log(data);
                        setFoodData(data);
                    } else {
                        alert("No data found");
                    }
                }
                fetchData();

            //   setFoodData(result.getText());
              stopScanner();
            } else {
              // Error occurred or barcode not detected yet
              if (error) {
                console.error(error);
              }
            }
          });
      })
      .catch((error) => {
        console.error('Error accessing the camera: ', error);
      });
  };

  const stopScanner = () => {
    // Stop the decoding process and remove the video element
    if (codeReader) {
      codeReader.reset();
    }
    const video = document.querySelector('video');
    if (video) {
      video.pause();
      video.srcObject = null;
      document.body.removeChild(video);
    }
  };

  return (
    <div>
      <button onClick={startScanner}>Click me to scan!</button>
    </div>
  );
}

async function getData(barcode: string) {
    const response = await fetch('/api/nutrition/' + barcode);
    const data = await response.json();
    return data;
}
