import { useState } from 'react';
import Button from '@mui/material/Button';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { SCANDIT_KEY } from '../constants/secrets';
import * as ScanditSDK from "scandit-sdk";
import dynamic from 'next/dynamic';
import { Barcode, BarcodePicker, ScanSettings, configure } from "scandit-sdk";

export default function LiveCameraButton() {
    const Scanner = dynamic(() => import('./Scanner'), { ssr: false });

    const [barcode, setBarcode] = useState("No barcode scanned yet");
    return (
        <div>
            {/* <Button size="large" variant="contained" component="span" onClick={scanBarcode} startIcon={<PhotoCameraIcon />}>Camera</Button> */}
            <Scanner />
            {/* <div id="scandit-barcode-picker" className="max-w-[1280px] max-h-[80%]"></div> */}
            {/* <p>{barcode}</p> */}
        </div>
    )
}