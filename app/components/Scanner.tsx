import { SCANDIT_KEY } from '../constants/secrets';
import { useState } from 'react';
import * as ScanditSDK from "scandit-sdk";
import { Barcode, BarcodePicker, ScanSettings } from "scandit-sdk";
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

export default function Scanner() {
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
            guiStyle: BarcodePicker.GuiStyle.VIEWFINDER,
        }).then((barcodePicker) => {
            const scanSettings = new ScanSettings({
                enabledSymbologies: [Barcode.Symbology.EAN8, Barcode.Symbology.EAN13],
                codeDuplicateFilter: 1000, // Minimum delay between duplicate results
                searchArea: { x:.3, y:.3, width:0.4, height:0.4 }, 
            });
            barcodePicker.applyScanSettings(scanSettings);

            barcodePicker.on("scan", (scanResult) => {
                barcodePicker.destroy();
                setIsCameraEnabled(false);
                alert(
                    scanResult.barcodes.reduce((string, barcode) => {
                        return string + `${Barcode.Symbology.toHumanizedName(barcode.symbology)}: ${barcode.data}\n`;
                    }, "")
                );
            });
        });
    }

    // runScanner();

    return (
        <div>
            <Button className="flex items-center justify-center" disabled={isCameraEnabled} size="large" variant="contained" component="span" onClick={runScanner} startIcon={<PhotoCameraIcon />}>Camera</Button>
            <div id="barcode-scanner"></div>
        </div>
    )
}
