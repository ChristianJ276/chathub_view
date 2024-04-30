import Image from "next/image"


export const Chat = () => {
  return (
    // <div  className="h-full bg-red-400">
    <div  className=" w-[74%]">
      
       <Image
          src="/imgs/fondoChat.png"
          alt="Starman"
          className="object-cover"
          width={550}
          height={600}
          style={
            {
              width: "100%",
              height: "100%"
            }
          }
        /> 
    </div>
  )
}
