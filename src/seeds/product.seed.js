import mongoose from "mongoose";
import { Product } from "../api/models/product.model.js";

const PRODUCTS = [
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - BITASPAIN A13, 15,6 " HD+, INTEL i9 10880H, 32 GB RAM, 32 GB SSD, Iris® Xe, Windows 11 Pro (64 Bit)',
    price: 955.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_134929010?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
    price: 429.0,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
  {
    name: 'Portatil - LENOVO L15, 15,6 " Full-HD, Intel Core i5-10310U, 8 GB RAM, 512 GB SSD, UHD Graphics, Windows 10',
    price: 1113.7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_128210307?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320",
  },
];

const productDocuments = PRODUCTS.map((product) => new Product(product));

mongoose
  .connect(
    "mongodb+srv://BePalmScrapping:CX3kK30QPnXdYWWl@cluster0.ivlm9ts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(async () => {
    const allProducts = await Product.find();

    if(allProducts.length) {
        await Product.collection.drop();
    }
  }).catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Product.insertMany(productDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect())
