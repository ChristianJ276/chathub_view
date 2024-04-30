import Image from "next/image";
import { Sidebar } from "@/menu"; 
import { Users } from "@/users"; 
import { Chat } from "@/chat";

export default function MainPage() {
  return (
    
    //   <div className="grid grid-flow-col ">
      <div className="flex h-[584px] w-full">
        <Sidebar/>
        <Users/> 
        <Chat/>
      </div>
    
  );
}