
import { useRouter } from "next/router";
import { useEffect} from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { accessTokenState} from "../store";

// @ts-ignore

export default function useAuth(){
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  // const [isLoaded] = useRecoilState(isLoadedState);
  useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          router.push("/Board/Login");
        }
      });
    }
  }, []);

  return {

  }
};
