import { useAuth } from "context/auth.context"
import { useRouter } from "next/router"
import { useEffect } from "react"

export function AuthGuard({ children }: { children: JSX.Element }) {
    const { user } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            // remember the page that user tried to access
            // redirect
            router.push("/login")
        }
    }, [router, user])

    /* show loading indicator while the auth provider is still initializing */
    if (!user) {
        return <h1>Application Loading</h1>
    }

    // if auth initialized with a valid user show protected page
    if (user) {
        return <>{children}</>
    }

    /* otherwise don't return anything, will do a redirect from useEffect */
    return null
}