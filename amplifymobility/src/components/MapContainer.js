import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//  import AppConfig from  'App.config';

 class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (AppConfig.GOOGLE.GAPI_KEY)
})(MapContainer)

// import { Map, GoogleApiWrapper } from 'google-maps-react';
// class MapContainer extends Component {
// render() {
//   return (
//       <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 47.444, lng: -122.176}}
//       />
//   );
// }
// }
// export default GoogleApiWrapper({
//   apiKey: 'TOKEN HERE'
// })(MapContainer);
// import Rect, {useState } from 'react'
// import Map from "google-maps-react";
// import Header from './components/Header';
// import AppConfig from  'App.config';
// const GoogleMaps = () =>
// {
//   return(
//     // <>
//     {/* <Header title ="Google Maps "/>
//     <div  className="row w-100"
//     style={{width: "100%",height:"550px"}}
//     > */}
//     <div className= Map >
      
//       bootstrapURLkeys;{key:AppConfig.GOOGLE.GAPI_KEY}
//       defaultZoom={13}:
//       defaultCenter={{
//         lat:24.4539,
//         lng:54.3779
//       }}
      
//     </div>
//     // </div>
//     // </>

//   );
// };


