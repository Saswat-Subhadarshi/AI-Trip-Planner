import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom'


function PlaceCardItem({place,trip}) {

  const [PhotoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    place && GetPlacePhoto();
  },[place]) 

  const GetPlacePhoto=async()=>{
    const data={
      textQuery:place.placeName
    }
    const result=await GetPlaceDetails(data).then(resp=>{

      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl)
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={PhotoUrl?PhotoUrl: '/placeholder.jpg'}
          className='w-[150px] h-[150px] rounded-xl object-cover'
        />
        <div>
            <h2 className='font-bold text-lg'>{place.placeName}</h2>
            <p className='text-sm text-gray-600'>{place.placeDetails}</p>
            <p className=' text-sm mt-2 font-semibold'>⏰ {place.time}</p>
            <Button size='sm'><FaMapLocationDot /></Button>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem