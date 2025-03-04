"use client"
import Image from 'next/image';
import { User } from '../types/userResult';
import { FaCalendarAlt, FaPhone, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import UserIcon from './userIcon';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const UserCard = ({ currentUser }: { currentUser: User | null }) => {
    const showInfo = [
        {  
            icon: FaUser,
            label: 'Name',
            value: `${currentUser?.name.first} ${currentUser?.name.last}`
        },
        {
            icon: MdEmail,
            label: 'Email',
            value: currentUser?.email
        },
        {
            icon: FaCalendarAlt,
            label: 'Birthday',
            value: currentUser?.dob.date
        }, {
            icon: FaLocationDot,
            label: 'Address',
            value: `${currentUser?.location.street.number} ${currentUser?.location.street.name}`
        }, {
            icon: FaPhone,
            label: 'Phone',
            value: currentUser?.cell
        }, 
    ];
    const [selected, setSelected] = useState<number>(0);
    
    return (
        <div className="flex flex-col w-1/3 h-1/3 relative bg-blue-400 rounded-lg">
            {currentUser && (
                <>
                    <div className="h-1/2 aspect-square rounded-full bg-red-400 border-3 border-white shadow absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Image src={currentUser.picture.thumbnail} alt="user image" fill className='rounded-full' />
                    </div>
                    
                    <div className='flex flex-col items-center h-full pt-20'>
                    <div className='text-lg font-semibold'>
                        {showInfo[selected].label}
                    </div>
                    <div className=''>
                        {showInfo[selected].value}
                    </div>
                    </div>
                </>
            )}

            <div className='flex flex-row justify-around pb-8'>
                {showInfo.map((info, key) => (
                    <UserIcon key={key} id={key} icon={info.icon} selected={selected===key} setSelected={setSelected} />
                ))}
            </div>
        </div>
    )
}

export default UserCard;