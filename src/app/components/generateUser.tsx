"use client";

const GenerateUserButton = ({ fetchUser }: { fetchUser: () => void }) => {

    return (
        <button onClick={fetchUser} className="bg-gradient-to-r from-rose-400 to-orange-300 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded-full" >
            Generate User
        </button>

    )
}

export default GenerateUserButton;