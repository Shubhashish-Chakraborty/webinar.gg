import InputBox from "./components/InputBox.jsx"
import Button from "./components/Button.jsx"
import TextHeading from "./components/TextHeading.jsx"
import TextSmall from "./components/TextSmall.jsx"
import Logo from "./components/Logo.jsx"

export default function App() {
    return (
        <>  
            <div className="h-screen bg-blue-500">
                <div className="flex justify-center">
                    <div>
                        <div className=" mt-28 flex justify-center">
                            <Logo></Logo>
                        </div>
                        
                        <div className="mt-20 flex justify-center">
                            <TextHeading>Verify Your Age</TextHeading>    
                        </div>

                        <div className="mt-16 flex justify-center">
                            <TextSmall>Please confirm your birth year. This data will not be stored.</TextSmall>    
                        </div>

                        <div className="mt-4 flex justify-center">
                            <InputBox type={"text"} placeholder={"Your Birth Year"}></InputBox>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <Button>Continue</Button>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}