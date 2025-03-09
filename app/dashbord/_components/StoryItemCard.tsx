import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';

type StoryItemType = {
    story :{id: number,
        storyType: string,
        ageGroup: string,
        coverImage: string,
        imageStyle: string,
        userEmail: string,
        userImage: string,
        userName: string,
        output: [] | any,
        storyId: string,
        storySubject: string}
    
  }
  

const StoryItemCard = ({story}:StoryItemType) => {
  return (
    <div  className="w-full min-w-[300px] p-1 sm:w-1/2 md:w-[40%] lg:w-1/4 xl:w-1/5 "  >
      <Link href={'/viewStory/'+story?.storyId }>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5 hover:scale-105 transaction-all cursor-pointer">
    <CardHeader className="absolute z-10 top-1 flex-col items-start ">
      <p className="text-tiny text-white/60 uppercase font-bold">New</p>
      {/* <h4 className="text-black font-medium text-2xl">Acme camera</h4> */}
    </CardHeader>

    <Image
  alt={story?.storySubject || "Card example background"}
  className="z-0 w-full h-full  object-cover"  // Changed from object-cover to object-contain
  src={story?.coverImage}
  width={500}
  height={500}
/>

    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
      <div>
        <p className="text-black  text-xl">{story?.output?.story?.title}</p>
        {/* <p className="text-black text-tiny">Get notified.</p> */}
      </div>
      <Button className="text-tiny" color="primary" radius="full" size="sm">
        Notify Me
      </Button>
    </CardFooter>
  </Card>
  
  </Link>
  </div>
    
  )
}

export default StoryItemCard