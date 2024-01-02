const ItemProfile = ({profile}) => {
    return (
        <div
            className="absolute top-0 left-10 z-50 text-sm text-gray-500 duration-300 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <img className="w-10 h-10 rounded-full" src={profile?.avatar}
                         alt={profile?.name}/>
                </div>
                <p className="text-base font-semibold leading-none text-gray-900 ">
                    <p>{profile?.name}</p>
                </p>
                <p className="mb-3 text-sm font-normal">
                    <p className="hover:underline">Email: {profile?.email}</p>
                </p>
                <p className="text-sm">Sđt: {profile?.phone}
                </p>
            </div>
        </div>

    )
}

export default ItemProfile