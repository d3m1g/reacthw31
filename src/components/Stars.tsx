import React from 'react';
import Star from './Star';
import { IFilm } from './types';

interface IStarProps {
  count: number
}

export default function Stars(props: IStarProps) {
  const {count} = props;
  return (    
    <div className='stars'>
    {[...Array(count)].map( (star,index) => <Star/> )}
    </div>
  ) 
}