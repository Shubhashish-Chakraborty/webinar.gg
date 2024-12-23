import InputBox from "./components/InputBox.jsx"
import Button from "./components/Button.jsx"
import TextHeading from "./components/TextHeading.jsx"
import TextSmall from "./components/TextSmall.jsx"
import Logo from "./components/Logo.jsx"
import GoogleSignin from "./components/GoogleSignin.jsx"

export default function App() {
    return (
        <>  
            <div className="h-screen bg-blue-500">
                <div className="flex justify-center">
                    <div>
                        <div className=" mt-2 flex justify-center">
                            <Logo></Logo>
                        </div>
                        
                        <div className="mt-24 flex justify-center">
                            <TextHeading>Welcome Back!</TextHeading>    
                        </div>

                        <div className="mt-10 flex justify-center">
                            <InputBox type={"email"} placeholder={"test@example.com"}></InputBox>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <Button>Continue</Button>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <TextSmall>Don't have an account? <u onClick={() => {window.location.href = "https://webinar.gg/signup"}} className="cursor-pointer font-bold">Sign up now</u></TextSmall>    
                        </div>

                        <div className="mt-10 flex justify-center">
                            <GoogleSignin>Sign in with Google</GoogleSignin>
                        </div>

                        <div className="mt-56 flex justify-center">
                            <TextSmall> <u>Privacy Policy</u> | <u>Terms & Conditions</u> | <u>Refunds & Cancellation Policy</u> </TextSmall>    
                        </div>

                        <div className="mt-2 flex justify-center">
                            <TextSmall> © 2024 webinar.gg. All Rights Reserved. </TextSmall>    
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}