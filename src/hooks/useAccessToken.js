import { useEffect, useState } from "react";

const useAccessToken = email => {

    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://phone-mania-server-sourov101.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('access token', data);
                    if (data.accessToken) {

                        localStorage.setItem('accessToken', data.accessToken);
                        setAccessToken(data.accessToken);

                    }
                })
        }
    }, [email])

    return [accessToken];
}
export default useAccessToken;