import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const DashboardPage = () => {
    const globalState = useSelector((state) => state)

    useEffect(() => {
        console.log(globalState);
    }, [])
    
    return (
        <div>
            Dashboard Page!
        </div>
    )
}

export default DashboardPage
