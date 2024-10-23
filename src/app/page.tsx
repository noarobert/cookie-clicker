"use client"
import { CookieZone } from "@/components/CookieZone";
import { useMemo, useState } from "react";
import { ShopItem } from "@/components/ShopItem";
import { Interface } from "readline";

export interface ShopItemType{
  id:number,
  image_url:string,
  label:string,
  price:number
  cps:number
}

export default function Home() {

  const [cookies, setCookies]= useState<number>(0)
  const shopItems=useMemo<ShopItemType[]>(()=>{
    return[
      {id:1, label:"Mamie",image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBbJpNOOHWBIlTz9Ynrt7KsGZJ8TdkGJY1oexFmVZyXOC5Pj_PE3uw--BYfQLW7zqtm4&usqp=CAU",price: 10, cps: 1},
      {id:2, label:"Super Mamie",image_url:"https://img.freepik.com/vecteurs-premium/grand-mere-forte-cool-ayant-super-pouvoirs_546897-245.jpg",price: 100, cps: 10}
    ]
  },[])

  return (
    <div className="h-screen w-screen flex">
        <div className="left w-1/4 bg-blue-500">
          <CookieZone totalCookies={cookies}onCookieClick={()=> setCookies(cookies+1) }cookiesPerSecond={30} /> 
        </div>
        <div className="center flex-1 bg-pink-500"></div>
        <div className="right w-1/4 bg-yellow-500">
        {shopItems.map(item =>
          <ShopItem item={item} key={item.id} onClick={()=> {setCookies(cookies-item.price)}} />
          )}
        </div>
    </div>
  );
}
