"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const Refresh = () => {
    const router = useRouter()
    useEffect(() => {
        router.refresh()
    }, [])
    return (
        <></>
    )
}

export default Refresh