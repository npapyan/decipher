import LiveCameraButton from './lib/component/LiveCamera';

export default function Home() {

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
