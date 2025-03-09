// types.ts
export interface Chapter {
    title: string;
    description: string;
    image_prompt: string;
  }
  
  export interface Cover {
    image_prompt: string;
    description: string;
  }
  
  export interface StoryDetails {
    title: string;
    cover: Cover;
    chapters: Chapter[];
  }
  
  export interface StoryOutput {
    story: StoryDetails;
  }
  
  export interface Story {
    id: number;
    storyId: string;
    storySubject: string;
    storyType: string;
    ageGroup: string;
    imageStyle: string;
    output: StoryOutput;
    coverImage: string;
    userEmail: string;
    userName: string;
    userImage: string | null;
  }
  
  export interface PageProps {
    params: {
      id: string;
    };
  }
  