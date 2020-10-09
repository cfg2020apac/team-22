
import React, { useState, useEffect, useContext } from 'react'
import { getToken, setToken, removeToken } from '../pages/Login/handleToken'
//import { Fetch, fetchData, HTTPAPI_URL } from '../utils/fetch';
export const LoginContext = React.createContext({
    loginSuccess: false,
    myName: '',
    myRole: '',
    handleConnectWA: () => { },
    //setLoginSuccess: () => { },
    //handleLogout: () => { }
})

const LoginProvider = function (props) {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [canLogin, setCanLogin] = useState(false);
    const [myName, setMyName] = useState('');
    const [myRole, setMyRole] = useState('');

    const fakeHandleConnectWA = () => {
        setLoginSuccess(true);
        setMyName('kevin');
        setMyRole('Admin');
    }
    async function handleConnectWA(){
        /*
        fetchData('/', { timeout: 30000 }, 'GET')
            .then(async (text) => {
                const json = JSON.parse(text);
                setConnectedPhone(json.connections.phone === true);
                setConnectedWeb(json.connections.waWeb === "open");
                setCanLogin(json.canLogin);
                if (json.user) {
                    const userObject = json.user
                    setMyChatID(userObject['jid'])
                    setMyName(userObject['name'])
                    setMyIcon(userObject['imgUrl'])
                }
                if (json.pendingQR) {
                    setQRValue(json.pendingQR)
                }
                if (!eventSource) {
                    const es = new EventSource(HTTPAPI_URL + '/live' + '?access_token=' + getToken())
                    setEventSource(es)
                    es.addEventListener('qr', ({ data }) => {
                        setQRValue(JSON.parse(data))
                    });
                    es.addEventListener('close', ({ data }) => {
                        setIsReconnecting(data['isReconnecting'])
                        setConnectedWeb(false)
                    })
                    es.addEventListener('open',({ data })=> {
                        setConnectedWeb(true)
                    })
                }
                if (json.connections.waWeb === 'connecting') {
                    await fetchData('/close')
                    await fetchData('/open')
                    setConnectedWeb(true);
                                    
                        
                }
                if (json.connections.waWeb === 'close'){
                    fetchData('/open').then(
                        text => {
                            console.log(text);
                            setConnectedWeb(true)
                        }
                    ).catch(err => console.log(err))
                }

            })
            .catch(err => {
                console.log(err)
            })
        //start new connection:
            */
           fakeHandleConnectWA();
    };

    const handleLogoutDashboard = () => {
        removeToken();

        setLoginSuccess(false);
    }
    const handleLogoutWA = () => {
        /*
        fetchData('/close').then(
            fetchData('/').then(
                data => {
                    console.log(data)
                }
            )
        )
        */
    }
    return (
        <LoginContext.Provider value={{
            loginSuccess: loginSuccess,
            myName: myName,
            myRole: myRole,
            //handleConnectWA: handleConnectWA,
            //handleConnectWA: fakeHandleConnectWA,
            //setLoginSuccess: setLoginSuccess,
            //handleLogoutDashboard: handleLogoutDashboard,
            //handleLogoutWA: handleLogoutWA
        }}>
            {props.children}
        </LoginContext.Provider>
    )
}
export default LoginProvider;
