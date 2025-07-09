import { SignUp } from "@clerk/nextjs";

export default function RegisterPage(){
    return(
            <main className="flex flex-col items-center p-5 gap-10
            animate-fade-in">
                {/* Need to add an image here :^( */}
                <img src="/app/assets/" alt="Logo" 
                width={100} height={100}/>
    
                <div className="mt-3">
                    <SignUp/>
                </div>
            </main>
        )
}