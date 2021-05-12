import React,{useEffect} from 'react';
import './Direction.scss';

const { kakao } = window;

const Direction =()=> {
    useEffect(()=>{
        const container = document.getElementById('map');
        const markers = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(35.87146203771322,128.62491786245073) 
        });
        const options = {
            center: new kakao.maps.LatLng(35.87146203771322,128.62491786245073),
            level: 5,
            marker:markers
        }
        const map = new kakao.maps.Map(container,options);
        markers.setMap(map);
    },[]);
    return (
    <div id="map" className="Direction__map" style={{width:'100%',height:'400px'}}/>
    )
}
export default Direction;