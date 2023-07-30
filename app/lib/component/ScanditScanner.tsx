'use client'
import { SCANDIT_KEY } from '../constant/secrets';
import { Barcode, BarcodePicker, ScanSettings } from "scandit-sdk";
import { useState } from 'react';
import * as ScanditSDK from "scandit-sdk";
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const style: React.CSSProperties = {
  top: "200px",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto",
  maxWidth: "1400px",
  maxHeight: "1000px",
};

export default function ScanditScanner({setFoodData}: any) {
    const [isCameraEnabled, setIsCameraEnabled] = useState(false);

    async function runScanner() {
        setIsCameraEnabled(true);

        await ScanditSDK.configure(SCANDIT_KEY, {
            engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
        });

        // ScanditSDK is ready to use. Scan barcodes here
        BarcodePicker.create(document.getElementById("barcode-scanner")!, {
            playSoundOnScan: true,
            vibrateOnScan: true,
            guiStyle: BarcodePicker.GuiStyle.LASER,
            enableTorchToggle: true,
            enableTapToFocus: true,
            enablePinchToZoom: true,
        }).then((barcodePicker) => {
            const scanSettings = new ScanSettings({
                enabledSymbologies: [Barcode.Symbology.EAN8, Barcode.Symbology.EAN13],
                codeDuplicateFilter: 1000, // Minimum delay between duplicate results
                codeDirectionHint: ScanSettings.CodeDirection.LEFT_TO_RIGHT,
                searchArea: { x:.3, y:.3, width:0.4, height:0.4 }, 
            });
            barcodePicker.applyScanSettings(scanSettings);

            barcodePicker.on("scan", (scanResult) => {
                async function fetchData() {
                    const data = await getData(scanResult.barcodes[0].data);
                    console.log(data);
                    if (data) {
                        barcodePicker.destroy();
                        setIsCameraEnabled(false);
                        console.log(data);
                        setFoodData(data);
                    } else {
                        alert("No data found");
                    }
                }
                fetchData();
            });
        });
    }

    return (
        <div className="flex items-center">
            <Button disabled={isCameraEnabled} size="large" variant="contained" component="span" onClick={runScanner} startIcon={<PhotoCameraIcon />}>Camera</Button>
            <div id="barcode-scanner" style={style}></div>
        </div>
    )
}

async function getData(barcode: string) {
    // Remove the first zero from the upcId
    if (barcode.charAt(0) === '0') {
        barcode = barcode.substring(1);
    }
    const response = await fetch('/api/nutrition/' + barcode);
    const data = await response.json();
    return data;
}
