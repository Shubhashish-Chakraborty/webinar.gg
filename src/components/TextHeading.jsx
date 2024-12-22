export default function TextHeading({
    children
}) {
    return (
        <>
            <div className="text-3xl text-white font-bold">
                {children}
            </div>
        </>
    )
}