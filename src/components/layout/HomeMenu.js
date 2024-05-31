'use client';
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setBestSellers(menuItems.slice(-3));
      });
    });
  }, []);
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -top-[-180px] left-[-270px]   -z-10">
          <Image src={'/left.jpg'} width={600} height={500} alt={'left'} />
        </div>
        <div className="absolute -top-[130px] right-[0px] -z-10">
          <Image src={'/right.jpg'} width={600} height={500} alt={'right'} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={'check out'}
          mainHeader={'New Items'} />
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {bestSellers?.length > 0 && bestSellers.map(item => (
          <MenuItem key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}