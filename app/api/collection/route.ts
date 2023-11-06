// ts 와 tsx의 차이점에 대해서 >> tsx는 리엑트 문법이 적용됨
import { NextResponse } from "next/server";


interface CollectionItem{
    title:string;
    desc:string;
    img:string;
    
}

interface CollectionData{
    data:CollectionItem[];
}

export async function GET() : Promise<NextResponse>{
    
    const data:CollectionItem[] = [
        {
            title:"국립현대미술관 소장품300",
            desc:"1910년대-1920년대",
            img:"images/slide_b1.png"
        },
        {
            title:"국립현대미술관 소장품300",
            desc:"1930년대-1940년대",
            img:"images/slide_b2.png"
        },
        {
            title:"국립현대미술관 소장품300",
            desc:"1950년대-1960년대",
            img:"images/slide_b3.png"
        },
        {
            title:"국립현대미술관 소장품300",
            desc:"1970년대-1980년대",
            img:"images/slide_b4.png"
        },
    ]
    return NextResponse.json({data} as CollectionData);
}
