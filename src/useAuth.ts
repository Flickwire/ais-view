import { useEffect, useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  
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
            const { access_token } = data as unknown as {
              access_token: string;
            };
            if (!access_token) {
              console.error("No access token received");
              return;
            }
            setToken(access_token);
          })
          .catch((err) => {
            console.error("Error parsing auth response:", err);
          });
      })
      .catch((err) => {
        console.error("Error fetching auth token:", err);
      });
  }, []);
  
  return token;
};