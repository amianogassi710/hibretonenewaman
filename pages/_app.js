import "../public/assets/css/style.css";
import "../styles/globals.css";
import {useEffect} from "react";
import {useLocalStorage} from "react-use";

function MyApp({Component, pageProps}) {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("is_logged_in", false);
    const [userAccount, setUserAccount] = useLocalStorage("user_account", {});
    useEffect(() => {
        require("../public/assets/js/bootstrap.bundle.min.js");
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetch("/auth/login/jwt", {
                method: "POST",
            }).then((response) => {
                if (response.status !== 200) {
                    setIsLoggedIn(false);
                    setUserAccount({});
                }
            });
        }
    }, [])

    return <Component {...pageProps} />;
}

export default MyApp;
