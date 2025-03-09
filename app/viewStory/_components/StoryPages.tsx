import { Chapter } from '@/types/types';
import { FaCirclePlay } from "react-icons/fa6";
import React from 'react';


interface StoryPagesProps {
  storyChapter: Chapter;
}

const StoryPages = ({ storyChapter }: StoryPagesProps) => {

  const playSpeech= (text:string)=>{
const synth = window.speechSynthesis
const textToSpeech = new SpeechSynthesisUtterance(text)
synth.speak(textToSpeech)
  }
  return (
    <div>
      <h2 className='text-2xl font-bold text-black flex justify-between '>{storyChapter?.title} <span><FaCirclePlay className=' text-3xl cursor-pointer' onClick={ ()=>playSpeech(storyChapter?.description) } /></span> </h2>
      <p className='text-xl p-10 mt-3 rounded-lg text-black-100 bg-slate-300'>{storyChapter?.description}</p>
    </div>
  );
};

export default StoryPages;
