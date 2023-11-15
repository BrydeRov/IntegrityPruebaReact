import React from 'react'
// Components
import NavBar from '../Components/NavBar'

const AppLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div style={{ marginInline: '6vw', marginTop: '3vh' }}>
                {children}
            </div>
        </>
    )
}

export default AppLayout
