## Decipher - Food scanning web application
### Purpose: Scan barcodes of food products to reveal nutritional facts and their analysis.


### Scanners
- ZXing Javascipt Port: https://github.com/zxing-js/library (Currently in use).
- Scandit Barcode scanner (Requires license but is faster/more reliable).

### Food Data Source 
- Currently utilizing Open Food Facts API but also have an API component for USDA FoodData Central.

### Status
- Currently formatting all the backend data on the frontend

### Next Steps
- Create a scoring system based on nutrition facts/ingredients/packaging.


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