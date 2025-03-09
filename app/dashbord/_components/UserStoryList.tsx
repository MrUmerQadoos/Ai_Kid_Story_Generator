import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import StoryItemCard from './StoryItemCard';

type StoryItemType = {
  id: number;
  storyType: string;
  ageGroup: string;
  coverImage: string;
  imageStyle: string;
  userEmail: string;
  userImage: string;
  userName: string;
  output: any[];
  storyId: string;
  storySubject: string;
};

function UserStoryList() {
  const { user } = useUser();
  const [storyList, setStoryList] = useState<StoryItemType[]>([]);

  useEffect(() => {
    if (user) {
      getUserStory();
    }
  }, [user]);

  const getUserStory = async () => {
    
    // @ts-expect-error: storyType can be null in the database, but TypeScript expects it to always be a string.
    const result: StoryItemType[] = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData.userEmail, user?.primaryEmailAddress?.emailAddress ?? ''))
      .orderBy(desc(StoryData.id));
  
    setStoryList(result);
  };
  
  return (
   <div className="flex flex-row flex-wrap justify-evenly gap-3 "> {/* Add flex layout here */}
      {storyList.map((item, index) => (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10"> 
        <StoryItemCard key={index} story={item} />
        // </div>
        
      ))}
    </div>
  );
}

export default UserStoryList;
