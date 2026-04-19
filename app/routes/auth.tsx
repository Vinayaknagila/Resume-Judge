import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter';
export const meta = () => {
    return [
        { title: "ResumeJudge - Authentication" },
        { name: "description", content: "Login or Register to access your dashboard and track your applications." }
    ]
}
const Auth = () => {
    const {isLoading,auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("next=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, navigate, next])
        
    return(
        <main className="bg-[url('/images/bg-main.svg')] bg-cover h-screen flex items-center justify-center">
            <div className='gradient-border shadow-lg'>
                <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                    <div className='flex flex-col items-center gap-2 text-center'>
                        <h1>Welcome</h1>
                        <h2>Login or Register to access your dashboard and track your applications.</h2>

                    </div>
                    <div>
                        {isLoading?(
                            <button className="auth-button animated-pulse w-full">
                                <p>Signing you in...</p>
                            </button>
                            
                        ):(<>
                            {auth.isAuthenticated? (
                                <button className='auth-button w-full' onClick={auth.signOut}>
                                    <p>Logout</p>
                                </button>
                            ):(
                                <button className='auth-button w-full' onClick={auth.signIn}>
                                    <p>Login</p>
                                </button>
                            )}
                        </>)}
                    </div>

                </section>
            </div>

        </main>
    )
}

export default Auth;