import React from 'react'
import { getInitialName } from '../utlis/helper'
import { Avatar } from 'primereact/avatar';


const ProfileAvatar = ({ name, ...avatarProps }) => {
    return (
        <div className='mt-4  d-flex justify-content-center align-items-center'>
            <Avatar {...avatarProps} label={getInitialName(name)} className="flex align-items-center justify-content-center mr-2"/>
        </div>
    )
}

export default ProfileAvatar