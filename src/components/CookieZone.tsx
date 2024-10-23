import Image from "next/image"
import cookie from '@/images/cookie.png'

interface Props{
    totalCookies: number,
    cookiesPerSecond?: number
    onCookieClick: Function
}

export const CookieZone=({totalCookies, cookiesPerSecond=0, onCookieClick}:Props)=>{

    return(
        <div className="h-full w-full flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">Total Cookies : {totalCookies}</p>
            <Image onClick={() => onCookieClick()} src={cookie} alt="big-cookie" className="h-72 hover:h-80 w-72 hover:w-80 ease-in-out duration-300 animate-spin"/>
        </div>
    )
}