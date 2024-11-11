import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/infoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

function Viewtrip() {

    const {tripId}=useParams();

    const [trip,setTrip]=useState([]);

    useEffect(()=>{
        tripId && GetTripData();
    },[tripId])

    const GetTripData=async ()=>{
        const docRef=doc(db,"AITrips",tripId);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document:",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such document");
            toast('no trip found')
        }
    }

  return (
    <div className='ml-24 p-10 md:px20 lg:px-44 xl:px-56'>

        {/* information Section */}
            <InfoSection  trip={trip}/>
        {/* Recomemnded Hotels */}

            <Hotels trip={trip}/>

        {/* Daily plans */}

            <PlacesToVisit trip={trip} />

        {/* footer */}
            <Footer trip={trip}/>

        {/* Route/Map */}

    </div>
  )
}

export default Viewtrip