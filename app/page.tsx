'use client'
import {gsap} from "gsap";
import {useEffect} from "react";
import Link from "next/link";
import TitleTest from "@/app/components/TitleTest";

export default function Home() {
    useEffect(()=>{
        const tl=gsap.timeline()
        tl.set('.blog',{x:-1080})

        tl.to('.blog',{x:0,duration:2,rotateY:360},)
    },[]);
  return (
   <>
   <h1 className={'blog'}>Home</h1>
       <Link href={'/Blog'}>Blogへ</Link>
       <TitleTest/>
   </>
  );
}
