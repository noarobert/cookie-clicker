import Image from "next/image"
import cookie from '@/images/cookie.png'

interface Props{
    totalCookies: number,
    cookiesPerSecond?: number
    onCookieClick: Function
    cps:number
}

export const CookieZone=({totalCookies, cookiesPerSecond=0, onCookieClick, cps= 0}:Props)=>{

    return(
        <div className="h-full w-full text-white flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">{cps} Cookies Par Seconde</p>
            <p className="text-3xl font-bold">Total Cookies : {totalCookies.toFixed(0)}</p>
            <Image onClick={() => onCookieClick()} src={cookie} alt="big-cookie" className="h-72 hover:h-80 w-72 hover:w-80 ease-in-out duration-100 animate-spin"/>
        </div>
    )
}