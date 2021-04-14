import React,{useEffect} from 'react';

const {kakao} = window;

const Direction =()=> {
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = {
            // center: new kakao.maps.LatLng(37.2751066073256,126.829342645292),
            level: 3
        }
    
        // const map = new kakao.maps.Map(container,options);
    },[]);
    return (
    <div id="map" style={{width:'500px',height:'400px'}}/>

    )
}
export default Direction;