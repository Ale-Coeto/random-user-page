"use client";

import useUserAPI from "../hooks/useUserAPI";
import GenerateUserButton from "./generateUser";
import LoadingScreen from "./loadingScreen";
import UserCard from "./userCard";
import UserHistory from "./userHistory";

const RandomUserContent = () => {
    const { currentUser, users, loading, fetchUser } = useUserAPI();

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center relative">
                <div className="absolute left-0">
                    <UserHistory users={users} />
                </div>
                <UserCard currentUser={currentUser} />
                <div className="pt-10">
                    <GenerateUserButton fetchUser={fetchUser} />
                </div>
            </div>
            {loading && (
                <LoadingScreen />
            )}
        </>
    )
}

export default RandomUserContent;