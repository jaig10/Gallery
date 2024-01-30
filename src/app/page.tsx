"use client"
// pages/index.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/styles.css";
import styles from "./page.module.css";
import _debounce from 'lodash/debounce';
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";




const MEME_API_URL = 'https://www.reddit.com/r/memes.json';

interface RedditResponse {
  data: {
    children: RedditPost[];
    after: string;
  };
}

interface RedditPost {
  data: {
    id: string;
    title: string;
    thumbnail: string;
    url: string;
  };
}

interface Post {
  
    id: string;
    title: string;
    src: string;
    url: string;
    width:number;
    height:number;
}

export default function Home() {
  const [memes, setMemes] = useState<Post[]>([]);
  const [after, setAfter] = useState<string|null>(null);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    loadMemes();
  }, []);

  const loadMoreMemes = _debounce(async () => {
    if (!loading && after) {
      setLoading(true);
      const response = await fetch(`${MEME_API_URL}?after=${after}`);
      const { data }: RedditResponse = await response.json();
  
      const updatedMemes = data.children.map(meme => ({
        id: meme.data.id,
        title: meme.data.title,
        src: meme.data.url,
        url: meme.data.url,
        width: 500,
        height: 500
      }));
  
      setMemes(prevMemes => [...prevMemes, ...updatedMemes]);
      setAfter(data.after);
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 100
        && !loading
        && after
      ) {
        loadMoreMemes();
      }
    };
  
    const debouncedScrollHandler = _debounce(handleScroll, 300);
  
    window.addEventListener('scroll', debouncedScrollHandler);
  
    return () => window.removeEventListener('scroll', debouncedScrollHandler);
  }, [after, loading]);


  const loadMemes = async () => {
    setLoading(true);
  const response = await fetch(MEME_API_URL);
  const { data }:RedditResponse = await response.json();

  const updatedMemes = data.children.map(meme => ({
    id: meme.data.id,
    title: meme.data.title,
    src: meme.data.url, 
    url: meme.data.url,
    width: 500,
    height: 500
  }));

  setMemes(updatedMemes);
  setAfter(data.after);
  setLoading(false);
  };

  

  return (
    <div className={styles.main} >
      <Head>
        <title>Reddit Memes Gallery</title>
      </Head>

      <div className='flex justify-center pt-[5%]'>
      <h1 className={styles.heading}>ENTE ASSIGNMENT</h1>
      </div>
      <div className='flex justify-center pb-[5%]'>
      <h1 className={styles.create}>created by Jai Gaur</h1>
      </div>

      <div>
      
      <PhotoAlbum
        layout="rows"
        photos={memes}
        targetRowHeight={200}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={memes}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
      </div>
    </div>
  );
}
