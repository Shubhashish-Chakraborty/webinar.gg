export default function Logo() {
    return (
        <>  
            <img onClick={() => {
                window.open("https://github.com/shubhashish-Chakraborty/webinar.gg" , "_blank")
            }} className="cursor-pointer" src="https://webinar.gg/loginLogo.svg" alt="logo" />
        </>
    )
}