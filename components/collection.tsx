'use client'

import React, { useEffect, useState } from "react";
import Swiper from 'swiper'


interface CollectionItem{
    title:string;
    desc:string;
    img:string;
    
}


export default function Collection () {

    const [itemList,setItemList] = useState<CollectionItem[]>([]);
    useEffect(()=>{
        const mySwiper = new Swiper('.swiper',{

        })
    },[])
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await fetch("/api/collection");
                const data = await res.json()
                console.log(data.data)
                setItemList(data.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

    
    return(
        <>
        <div className="max-w-[1600px] flex flex-wrap mx-auto">
          <div className="border-t-[1px] border-black relative p-[40px_0_99px]">
            <div className="">
                <div className="relative mb-10">
                    <h3 className="inline-block font-semibold text-[28px]">소장품</h3>
                    <a href="#" className="absolute top-1/2 right-0 transform -translate-y-1/2">소장품 모두 보기 <i className="-mt-[1px] ml-2 w-1 h-2 bg-[url('/public/images/icon_btnMore.svg')] bg-contain inline-block"></i></a>
                </div>
                {
                    itemList.map((e,i)=>{
                        return(
                            <React.Fragment key={i}>
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide mr-11 max-w-[400px]">
                                         <a href="/">
                                            <div className="max-h-[600px] overflow-hidden relative"><img src={e.img} alt={e.desc} className="block w-auto mx-auto max-w-full max-h-full"/>
                                            </div>
                                            <div className="mt-[25px] relative text-left">
                                            <p className="text-[28px] font-semibold block">{e.title}</p>
                                            <span className="text-[15px] font-semibold mt-[3px] block text-[#949494]">{e.desc}</span>
                                            </div>
                                        </a>
                                    </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }   
            </div>
        </div>
    </div>
        </>
    )
}