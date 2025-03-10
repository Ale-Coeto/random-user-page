"use client";

interface UserIconProps {
    id: number;
    icon: React.ElementType;
    selected: boolean;
    setSelected: (key: number) => void;
}

const UserIcon = ({ icon: Icon, selected, id, setSelected }: UserIconProps) => {
    const handleHover = () => {
        setSelected(id);
        console.log(id);
    }

    return (
        <div className="" onMouseEnter={handleHover}>
            <Icon className={`text-2xl ${selected ? "text-rose-400" : "text-gray-400"}`} />
        </div>
    )
}

export default UserIcon;