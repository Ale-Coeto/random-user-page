"use client";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { IconType } from "react-icons";

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
            <Icon className={`${selected ? "text-cyan-400" : "text-gray-400"}`} />
        </div>
    )
}

export default UserIcon;