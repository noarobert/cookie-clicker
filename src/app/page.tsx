"use client"
import { CookieZone } from "@/components/CookieZone";
import { useEffect, useState } from "react";
import { ShopItem } from "@/components/ShopItem";
import {PurchasedItem} from"@/components/PurchasedItem";

export interface ShopItemType{
  id:number,
  image_url:string,
  label:string,
  price:number
  cps:number,
  total:number
}

const defaultShopItems: ShopItemType[]=[
  {id:1, label:"Mamie",image_url:"https://cdn-icons-png.flaticon.com/512/6247/6247428.png",price: 10, cps: 1,total: 0},
  {id:2, label:"Super Mamie",image_url:"https://mamie-crochet.fr/wp-content/uploads/2021/05/cropped-0000000000000000-mamie-500-20212.png",price: 100, cps: 10,total: 0}
]




export default function Home() {

  const [cookies, setCookies]= useState<number>(0)
  const [purchasedItems,setPurchasedItems]=useState(defaultShopItems)
  const [cookiesPerSecond,setCookiesPerSecond]=useState(0)

  const handlePurchasedItem=(item: ShopItemType)=>{
  setCookies(cookies-item.price)
  
  const actualItems=[...purchasedItems]
  const itemIndex = actualItems.findIndex(o=>o.id==item.id)
  actualItems[itemIndex].total++
  setPurchasedItems([...actualItems])
  setCookiesPerSecond(cookiesPerSecond+item.cps)
}

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCookies(prevCookies => prevCookies+(cookiesPerSecond/100))
    },10)

    return ()=> {clearInterval(interval)}
  },[cookiesPerSecond])


  return (
    <div className="h-screen w-screen flex">
        <div className="left w-1/4 bg-blue-500">
          <CookieZone totalCookies={cookies}cps={cookiesPerSecond}onCookieClick={()=> setCookies(cookies+1) } /> 
        </div>
        <div className="center flex-1 bg-pink-500 grid grid-cols-4 gap-3 p-5">
          {purchasedItems.filter(o => o.total > 0).map(item =><PurchasedItem item={item} key={item.id}/>)}
        </div>
        <div className="right w-1/4 bg-yellow-500 flex flex-col gap-3 p-2">
        {purchasedItems.map(item =>
          <ShopItem 
          item={item}
          totalCookies={cookies}
          key={item.id}
          onClick={()=> {handlePurchasedItem(item)}} />
          )}
        </div>
    </div>
  );
}
