export default function Button({
    children,
    onClick
}) {
    return (
        <>
            <div onClick={onClick} className="text-white cursor-pointer bg-gray-100 flex justify-center py-3 w-96 rounded-md transition ease-in-out duration-300 font-bold hover:bg-cyan-400 hover:text-black">
                {children}
            </div>
        </>
    )
}