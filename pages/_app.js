import "../public/assets/css/style.css";
import "../styles/globals.css";
import React, {useEffect} from "react";
import {useLocalStorage} from "react-use";
import {createTheme, ThemeProvider, CssBaseline} from '@mui/material';
import axiosFetchWithRetry from "../components/elements/fetchWithRetry";

function MyApp({Component, pageProps}) {
    const [isLoggedIn, setIsLoggedIn] = useLocalStorage("is_logged_in", false);
    const [userAccount, setUserAccount] = useLocalStorage("user_account", {});
    useEffect(() => {
        require("../public/assets/js/bootstrap.bundle.min.js");
    }, []);

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Plus Jakarta Sans',
                'sans-serif',
            ].join(','),
        },
    });
    useEffect(() => {
        if (isLoggedIn) {
            try {
                axiosFetchWithRetry({
                    url: "/auth/login/jwt",
                    reqOptions: {
                        method: "POST",
                    },
                    timeout: 3000,
                });
            } catch (error) {
                setIsLoggedIn(false);
                setUserAccount({});
            }
        }
    }, [])

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>);
}

export default MyApp;
