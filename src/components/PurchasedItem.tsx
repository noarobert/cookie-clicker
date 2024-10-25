import { ShopItemType } from "@/app/page";


interface Props{
    item:ShopItemType
}

export const PurchasedItem=({item}:Props)=> {
        return(
            <div className="rounded-lg bg-pink-500 flex flex-col justify-center items-center max-h-60">
                <img src= {item.image_url} className="rounded-full border max-h-32"/>
                <p className="font-bold text-center">{item.label}</p>
                <p>Total : {item.total}</p>
                <p>{item.cps * item.total}/s</p>

            </div>
        )
    }