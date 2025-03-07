import { User, UserResult } from "../types/userResult";
import Image from 'next/image';

const UserLine = ({ user }: { user: User }) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <Image src={user.picture.thumbnail} alt="user image" width={40} height={40} className="rounded-full" />
            <h1 className="text-sm text-gray-700">{user.name.first} {user.name.last}</h1>
        </div>
    );
}

export default UserLine;