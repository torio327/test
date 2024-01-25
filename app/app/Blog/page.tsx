
import Link from "next/link";
import TitleTest from "@/app/components/TitleTest";

export default function page(){
    return(
        <>
        <h1>Blog</h1>
            <Link href={'/'}>Home</Link>
            <TitleTest/>
        </>
    )
}