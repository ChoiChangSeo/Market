import { useEffect } from "react";


declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMap {
  address? : string
  data?:any
}

export default function KakaoMap(props:IKakaoMap) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src ="//dapi.kakao.com/v2/maps/sdk.js?appkey=e4f1c0cfda4d108dc2c70fc9ed78b3b7&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      if(!props.address && !props.data){
        return window.kakao.maps.load(function () {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          return map
        })
      }else{
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
 
        geocoder.addressSearch(props.address? props.address : props.data?.fetchUseditem.useditemAddress?.address, function(result:any, status:any) {
           if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              const marker = new window.kakao.maps.Marker({
                  map: map,
                  position: coords
              });
              const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:6px 0;">거래장소 </br> ${props.address? props.address : props.data?.fetchUseditem.useditemAddress?.address}</div>`
              });
              infowindow.open(map, marker);
              map.setCenter(coords);
          } 
      });  
      });
    }
    }
  }, [props.address || props.data]);
 

  return (
    <>
      <div id="map" style={{ width: "384px", height: "252px" }}></div>
    </>
  );
}