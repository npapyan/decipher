import LiveCameraButton from './lib/component/LiveCamera';

export default function Home() {

  return (
    <div>
      <h1 className="text-center text-4xl mt-4">Decipher</h1>
      <h3 className="text-center text-2xl mb-4 text-gray-400">Scan a barcode below to view analysis</h3>
      <div className="flex mx-auto justify-center">
        <div>
          <LiveCameraButton />
        </div>
      </div>
    </div>
  )
}
