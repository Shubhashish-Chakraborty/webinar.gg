export default function TextSmall({
    children
}) {
    return (
        <>
            <div className="text-sm text-gray-200 font-bold">
                {children}
            </div>
        </>
    )
}