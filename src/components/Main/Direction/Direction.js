import React,{useEffect} from 'react';

const {kakao} = window;

const Direction =()=> {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.87146203771322, 128.62491786245073),
            level: 3
        }
    
        const map = new kakao.maps.Map(container,options);
    },[]);
    return (
    <div id="map" style={{width:'500px',height:'400px'}}/>

    )
}
export default Direction;