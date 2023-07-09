import { SCANDIT_KEY } from '../constants/secrets';
import * as ScanditSDK from "scandit-sdk";
import { Barcode, BarcodePicker, ScanSettings } from "scandit-sdk";

export default function Scanner() {
    async function runScanner() {

        await ScanditSDK.configure(SCANDIT_KEY, {
            engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
        });

        // ScanditSDK is ready to use. Scan barcodes here
        BarcodePicker.create(document.getElementById("scandit-barcode-picker")!, {
            playSoundOnScan: true,
            vibrateOnScan: true,
        }).then((barcodePicker) => {
            const scanSettings = new ScanSettings({
                enabledSymbologies: [Barcode.Symbology.EAN8, Barcode.Symbology.EAN13],
                codeDuplicateFilter: 1000, // Minimum delay between duplicate results
            });
            barcodePicker.applyScanSettings(scanSettings);

            barcodePicker.on("scan", (scanResult) => {
                alert(
                    scanResult.barcodes.reduce((string, barcode) => {
                        return string + `${Barcode.Symbology.toHumanizedName(barcode.symbology)}: ${barcode.data}\n`;
                    }, "")
                );
            });
        });
    }

    runScanner();

    return (
        <div id="scandit-barcode-picker"></div>
    )
}