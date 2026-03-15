import { useEffect } from "react";
import { useAISContext } from "./AISContext";

export const useAuth = () => {
  const { setAuthToken, setAuthTokenExpiry } = useAISContext();
  useEffect(() => {
    fetch("/api/auth")
      .then((res) => {
        if (!res.ok) {
          console.error("Auth fetch failed:", res.status);
          return;
        }
        res
          .json()
          .then((data) => {
            const { access_token, expires_in } = data as unknown as {
              access_token: string;
              expires_in: number;
            };
            if (!access_token) {
              console.error("No access token received");
              return;
            }
            setAuthToken(access_token);
            const expiryDate = new Date(Date.now() + expires_in * 1000);
            setAuthTokenExpiry(expiryDate);
          })
          .catch((err) => {
            console.error("Error parsing auth response:", err);
          });
      })
      .catch((err) => {
        console.error("Error fetching auth token:", err);
      });
  }, [setAuthToken, setAuthTokenExpiry]);
};
