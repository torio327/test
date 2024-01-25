import Link from "next/link";
import TitleTest from "@/app/components/TitleTest";

export default function Home() {
  return (
   <>
   <h1>Home</h1>
       <Link href={'/Blog'}>Blogへ</Link>
       <TitleTest/>
   </>
  );
}
