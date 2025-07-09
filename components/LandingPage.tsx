'use client'

import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"

export default function LandingPage() {
    return (
        <main className="flex items-center p-10 gap-24
        animate-fade-in max-md:flex-col">
            {/* Need to add an image here :^( */}
            <section className="flex flex-col items-center">
                <img src="/assests/logo" alt="Logo" 
                width={100} height={100}/>

                <h1 className="text-2xl font-black lg:text-3xl">
                    Your time, perfectly planned
                </h1>

                <p className="font-extralight">
                    Join thousands of experts who can easily book
                    meetings with one of the best scheduling tools
                </p>
                {/* Need to add another image here :^( */}
                <img src="/app/assets" alt="A costumer planning their schedule."
                width={500} height={500} />
            </section>

            <div className="mt-3">
                <SignIn
                routing="hash"
                appearance={{
                    baseTheme: neobrutalism,
                }}/>
            </div>
        </main>
    )
}