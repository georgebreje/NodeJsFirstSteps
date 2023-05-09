"use client"

import React, { useState } from 'react'

type User = {
    username: string;
    password: string;
}

export const Authentication: React.FC = () => {
    const [userData, setUserData] = useState<User>();
    
    return (
    <div>Authentication</div>
  )
}

export default Authentication;
