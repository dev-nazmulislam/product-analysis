import React, { useContext, useState } from "react";
import img1 from "../../assets/images/header.png";
import img2 from "../../assets/images/aero-15-oled.png";
import { ReviewContext } from "../../App";
import Comment from "../Comment/Comment";

const ShoDetail = () => {
  const [img, setImg] = useState(true);
  const [reviews] = useContext(ReviewContext);

  return (
    <section className=" px-4 md:px-20">
      <div className="flex flex-col md:flex-row gap-4 my-12">
        <div className="md:w-1/4	">
          <img src={img ? img1 : img2} alt="" />
          <div className="flex justify-center items-center border-2 p-2">
            <img onClick={() => setImg(true)} width={80} src={img1} alt="" />
            <img onClick={() => setImg(false)} width={80} src={img2} alt="" />
          </div>
        </div>
        <div className="md:w-3/4">
          <h1 className="text-4xl text-blue-500">
            Gigabyte AERO 15 OLED KC Core i7 10th Gen RTX 3060P 6GB Graphics
            15.6" UHD Gaming Laptop
          </h1>
          <div className="my-2">
            <button className="p-2 mr-2 bg-slate-300 rounded-3xl">
              Price 206,000৳
            </button>
            <button className="p-2 mr-2 bg-slate-300 rounded-3xl">
              Regular Price 222,430৳
            </button>
            <button className="p-2 mr-2 bg-slate-300 rounded-3xl">
              Status In Stock
            </button>
            <button className="p-2 mr-2 bg-slate-300 rounded-3xl">
              Product Code 17586
            </button>
          </div>
          <div>
            <h4>Key Features</h4>
            <p>Model: AERO 15 OLED KC</p>
            <p>
              Intel Core i7-10870H Processor (16M Cache, 2.20 GHz up to 5.00
              GHz)
            </p>
            <p>16GB (8GBx2) RAM + 512GB SSD</p>
            <p>RTX 3060P GDDR6 6GB Graphics</p>
            <p>15.6" UHD Samsung AMOLED Display</p>
          </div>
          <button className="p-2 mr-2 text-orange-500 underline decoration-1 rounded-3xl">
            View More Info
          </button>
        </div>
      </div>
      <div className="flex gap-4 my-4">
        <button className="bg-slate-200 p-2 rounded-md hover:bg-orange-500 hover:text-white font-medium">
          Specification
        </button>
        <button className="bg-slate-200 p-2 rounded-md hover:bg-orange-500 hover:text-white font-medium">
          Description
        </button>
        <button className="bg-slate-200 p-2 rounded-md hover:bg-orange-500 hover:text-white font-medium">
          Reviews
        </button>
      </div>
      <hr />
      <div>
        <h2 className="text-4xl my-4">Specification</h2>
        <h4 className="text-xl my-2 bg-slate-300 p-2 rounded-md">
          Basic Information
        </h4>
        <div className="flex flex-col md:flex-row my-3">
          <h4 className="md:w-1/4">Processor:</h4>
          <p>
            Intel Core i7-10870H Processor (16M Cache, 2.20 GHz up to 5.00 GHz)
          </p>
        </div>
        <div className="flex my-3">
          <h4 className="md:w-1/4">Display:</h4>
          <p>
            15.6" Thin Bezel UHD 3840x2160 Samsung AMOLED Display (VESA
            DisplayHDR 400 True Black, 100% DCI-P3)
          </p>
        </div>
        <div className="flex my-3">
          <h4 className="md:w-1/4">Memory:</h4>
          <p>16GB (8GBx2) 3200MHz RAM (upgrade up to Max 64GB)</p>
        </div>
        <div className="flex my-3">
          <h4 className="md:w-1/4">Storage:</h4>
          <p>
            512GB NVMe PCIe SSD (Supports 1x NVMe PCIe & SATA/ 1x NVMe PCIe)
            (Support 3 Storages System)
          </p>
        </div>
        <div className="flex my-3">
          <h4 className="md:w-1/4">Graphics:</h4>
          <p>NVIDIA GeForce RTX 3060P GDDR6 6GB Graphics</p>
        </div>
        <h2 className="text-4xl my-4">Description</h2>
        <h4 className="text-xl my-4">
          Gigabyte AERO 15 OLED KC Core i7 10th Gen RTX 3060P 6GB Graphics 15.6"
          UHD Gaming Laptop
        </h4>
        <p>
          Gigabyte Aorus 15G XC Gaming Laptop comes, with Intel Core i7-10870H
          Processor (16M Cache, 2.20 GHz up to 5.00 GHz), 16GB (8GBx2) 3200MHz
          RAM, 512GB PCIe NVMe SSD, and it has been integrated with the all-new
          NVIDIA GeForce RTX 3060P GDDR6 6GB Graphics. It has been specifically
          designed for top-tier extreme gamers, the AORUS pro-gaming laptop
          meets the exacting standards in design and performance to play at the
          highest level. It has been equipped with a 15.6" Thin Bezel UHD
          3840x2160 Samsung AMOLED Display (VESA DisplayHDR 400 True Black, 100%
          DCI-P3) Display. An award-winning design features a stunning per-key
          RGB backlit keyboard that fits perfectly into the light 2-kg chassis;
          the lightest within its class. 8-hours of long-lasting power endurance
          makes any time, game time. AX200 network interface card supports the
          next-generation Wi-Fi 6 technology and delivers transmission peak data
          rates of close to 2.4Gbps. Used in combination with a 2.5Gbps Ethernet
          network, you are granted a real-time gaming experience without a
          millisecond of lag, allowing you to be the last one standing. It has 2
          years warranty.
        </p>
        <h2 className="text-4xl my-4">Review({reviews.length})</h2>
        <div>
          {reviews.map((review) => (
            <Comment key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoDetail;
