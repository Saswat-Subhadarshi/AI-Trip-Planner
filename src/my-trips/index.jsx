import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import UserTripCarditem from './components/UserTripCarditem';

function MyTrips() {

    const navigation=useNavigation();
    const [userTrips,setUserTrips]=useState([]);
    useEffect(()=>{
        GetUserTrips();
    },[])
    const GetUserTrips=async()=>{
        const user=JSON.parse(localStorage.getItem('user'))
        
        if(!user){
            navigation('/');
            return;
        }
        setUserTrips([]);
        const q=query(collection(db,'AITrips'),where('userEmail','==',user?.email))
        const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
        
        console.log(doc.id, " => ", doc.data());
        setUserTrips(prevVal=>[...prevVal,doc.data()])
        });

    }
  return (
    <div className='ml-56 sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='font-bold text-3xl '>My Trips</h2>

        <div className='grid grid-cols-2 mt-10 md:grid-cols-3'>
            {userTrips.map((trip,index)=>(
                <UserTripCarditem trip={trip}/>
            ))}
        </div>
    </div>
  )
}

export default MyTrips