import InputBox from "./components/InputBox.jsx"
import Button from "./components/Button.jsx"
import TextHeading from "./components/TextHeading.jsx"
import TextSmall from "./components/TextSmall.jsx"
import Logo from "./components/Logo.jsx"

export default function App() {
    return (
        <>  
            <div className="h-screen bg-blue-500">
                <Logo></Logo>
                <TextHeading>
                    Verify Your Age
                </TextHeading>

                <TextSmall>
                    Please confirm your birth year. This data will not be stored.
                </TextSmall>

                <InputBox type={"text"} placeholder={"test@example.com"}>

                </InputBox>
                <Button onClick={() => {console.log("FCKING KING")}}>
                    Continue    
                </Button>
            </div>
        </>
    )
}