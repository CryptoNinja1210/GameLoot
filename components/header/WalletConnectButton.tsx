import { useAddress, useAuth, useMetamask } from "@thirdweb-dev/react";
import { createSupabaseClient } from "../../lib/createSupabase";
import useSupabaseUser from "../../lib/useSupabaseUser";
import styles from "./WalletConnectButton.module.css";

export default function WalletConnectButton() {
  const thirdwebAuth = useAuth();
  const address = useAddress();
  const connect = useMetamask();
  const { auth } = createSupabaseClient();
  const { user, session, refresh, isLoading } = useSupabaseUser();

  // Link verified wallet address to our Supabase account
  const linkWallet = async () => {
    const payload = await thirdwebAuth?.login();
    await fetch("/api/link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload, access_token: session?.access_token }),
    });

    refresh();
  };

  return (
    <div>
      {user ? (
        <div className={styles.stack}>
          {/* {address ? (
            <button
              onClick={() => linkWallet()}
              className={styles.mainButton}
            >
              Link Wallet to Account
            </button>
          ) : (
            <button onClick={() => connect()} className={styles.mainButton}>
              Connect Wallet
            </button>
          )} */}

          <button
            onClick={() => auth.signOut()}
            className={styles.mainButton}
          >
            {`Logout (${user.email})`}
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() =>
              auth.signInWithOAuth({
                provider: "google",
              })
            }
            className={styles.mainButton}
          >
            Login with Google
          </button>
        </div>
      )}
    </div>
  )
}