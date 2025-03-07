"use client";

import { User } from "../types/userResult";
import UserLine from "./userLine";

const UserHistory = ({ users }: { users: User[] }) => {

    return (
        <div className="flex flex-col p-6 bg-white rounded-md ml-6 gap-2 overflow-y-scroll">
            <div className="text-base font-semibold text-gray-800">
                User history
            </div>
            <div className="flex flex-col max-h-80 gap-2 pb-4">
                {users.map((user, key) => (
                    <UserLine key={key} user={user} />
                ))}
            </div>
        </div>
    )
};

export default UserHistory;