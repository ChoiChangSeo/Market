import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect} from "react";

// @ts-ignore

export default function useAuth(){
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      Modal.error({ content: "로그인 후 이용 가능합니다." });
      router.push("/Login");
    }
  }, []);

  return {

  }
};
