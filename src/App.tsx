import { useEffect } from "react";
import { Web3Auth } from "@web3auth/web3auth";

const clientId = "BMdhaBBKwsMr1jS7Z6rikXs_DDHZaFE1S9zIHrUZRA3J5xi-pTvN_LVm7UpeVbKmwxOk3W0T5YtoPKyrZIuWleQ"

export const App = () => {
    useEffect(() => {
        const init = async () => {
            try {

                const web3auth = new Web3Auth({
                    clientId,
                    chainConfig: {
                        chainNamespace: "eip155",
                        chainId: "0x89",
                        rpcTarget: "https://rpc-mainnet.matic.network",
                    },
                });

                await web3auth.initModal();
            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    return (
        <div>
            test
        </div>
    );
}