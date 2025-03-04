"use client";

import { User } from "../types/userResult";
import UserLine from "./userLine";

const UserHistory = ({ users }: { users: User[] }) => {

    return (
        <div className="flex flex-col p-4 bg-white rounded-md ml-6 gap-2">
            {users.map((user, key) => (
                <UserLine key={key} user={user} />
            ))}
        </div>
    )
};

export default UserHistory;