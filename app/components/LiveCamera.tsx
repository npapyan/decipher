import { useState } from 'react';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { SCANDIT_KEY } from '../constants/secrets';
import * as ScanditSDK from "scandit-sdk";
import { Barcode, BarcodePicker, ScanSettings, configure } from "scandit-sdk";

export default function LiveCameraButton() {

    const scanBarcode = () => {
        // TODO: Move this to layout.tsx and test initialization process before page load
        ScanditSDK.configure(SCANDIT_KEY, {
            engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
        }).then(() => {
            // TODO: Make this async await later
            // ScanditSDK is ready to use. Scan barcodes here
            BarcodePicker.create(document.getElementById("scandit-barcode-picker")!, {
                playSoundOnScan: true,
                vibrateOnScan: true,
            }).then((barcodePicker) => {
                // barcodePicker is ready here to be used (rest of the tutorial code should go here)
                const scanSettings = new ScanSettings({
                    enabledSymbologies: [Barcode.Symbology.EAN8, Barcode.Symbology.EAN13],
                    codeDuplicateFilter: 1000, // Minimum delay between duplicate results
                });
                barcodePicker.applyScanSettings(scanSettings);

                barcodePicker.on("scan", (scanResult) => {
                    setBarcode(scanResult.barcodes.reduce((string, barcode) => {
                        return string + `${Barcode.Symbology.toHumanizedName(barcode.symbology)}: ${barcode.data}\n`;
                    }, ""));

                    alert(
                        scanResult.barcodes.reduce((string, barcode) => {
                            return string + `${Barcode.Symbology.toHumanizedName(barcode.symbology)}: ${barcode.data}\n`;
                        }, "")
                    );
                });
            });
        });

    }

    const [barcode, setBarcode] = useState("No barcode scanned yet");
    return (
        <div>
            <Button size="large" variant="contained" component="span" onClick={scanBarcode} startIcon={<PhotoCameraIcon />}>Camera</Button>
            <div id="scandit-barcode-picker" className="max-w-[1280px] max-h-[80%]"></div>
            <p>{barcode}</p>
        </div>
    )
}
