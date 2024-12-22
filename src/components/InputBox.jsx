export default function InputBox({
    type,
    placeholder
}) {
    return (
        <>
            <div className="bg-blue-400 py-3 w-72 border-2 border-gray-100 rounded-xl">
                <input className="w-64 px-3 placeholder-gray-50 bg-blue-400 text-white outline-none" type={type} placeholder={placeholder}/>
            </div>
        </>
    )
}