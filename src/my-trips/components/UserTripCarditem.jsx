import React from 'react'

function UserTripCarditem({trip}) {
  return (
    <div>
        <img src="/placeholder.jpg"/>
        <div>
          <h2>{trip?.userSelection?.location?.label}</h2>
        </div>
    </div>
  )
}

export default UserTripCarditem