"use client";

import useUserAPI from "../hooks/useUserAPI";

const GenerateUserButton = ({fetchUser} : {fetchUser: () => {}}) => {
    const handleGenerateUser = () => {
        console.log("click")
        fetchUser();
    }

    return (
        <button onClick={fetchUser} className="bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded" >
            Generate User
        </button>

    )
}

export default GenerateUserButton;