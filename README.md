## Decipher - Food scanning web application
### Purpose: Scan barcodes to reveal health information

### Goals
- Set-up a reliable barcode scanning component
- Utilize open source food database for retrieving information based on barcode
- Create a scoring system based on nutrition facts/ingredients/packaging

### Status
- Working on the barcode scanning feature. Attempting to utilize Scandit SDK which is very reliable but having some issues scanning through web-app on a mobile device
- I have an alternative project utilizing an open source scanner but it is much less reliable. (QuaggaJS )

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.