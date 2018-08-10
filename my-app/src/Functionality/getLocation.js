import $ from 'jquery';
// import getSolar from './getSolar';


// eslint-disable-next-line
const getLocation = (getSolarCall) => {
// eslint-disable-next-line
    if(localStorage.getItem('geoLocationData') == undefined){
    console.log("requested location again");
    $.getJSON(process.env.REACT_APP_IPAPI_KEY, function (GeoLocation) {
       
  
      //city
        let city = GeoLocation.city;
        let adminAreaLong = GeoLocation.city;
      //BC full
        let region = GeoLocation.region;
      //canadafull
        let country = GeoLocation.country_name;
          if(!country){ country = GeoLocation.country_name}
      //stuff
        let fullAddress = GeoLocation.city + ", " + GeoLocation.region_code + ", " + GeoLocation.country_name + ", " + GeoLocation.postal;
      //Latitude Defined here
        let lat = GeoLocation.latitude;
      //Longitude Defined here
        var lon = GeoLocation.longitude;
      //Calls the calling functions
  
      // eslint-disable-next-line
      let geoLocationData = {
        city: city,
        adminAreaLong: adminAreaLong, 
        region: region, 
        country: country, 
        fullAddress: fullAddress,  
        lat: lat, 
        lon: lon
      }
  
      localStorage.setItem("geoLocationData", JSON.stringify(geoLocationData));
      let locationBox = setLocationbox(geoLocationData);
      localStorage.setItem("locationBox", JSON.stringify(locationBox));

      getSolarCall();
    return locationBox;    
      
      
    }).fail(function(){
    alert("We seem to be out of automatic lookup calls for today. Try the custom location page instead.");    
    return;

    //        
    });
  
  
  
  }else{
    let geoLocationData = JSON.parse(localStorage.getItem('geoLocationData'));      

    getSolarCall();
    return  setLocationbox(geoLocationData);

    // console.log("No Request needed - location stored in cookie");
    // let locationBox = setLocationbox(geoLocationData);
    // const solarBox = await getSolar(locationBox);
    // return solarBox;
  }
}

function setLocationbox(geoLocationData){
    //formats data for the cards
    let locationBox = {
        header: "Location",
        // heading1: "Location: ",
        option1Text: "Lon: ",
        option2Text: "Lat: ", //Country
        option3Text:  "Country: ", //city        // heading5: "Full Address: ",
        subheadingEnd: "Accuracy 100 km",
        bigContent: geoLocationData.city,
        option3: geoLocationData.country,
        option1: geoLocationData.lat.toFixed(2),
        option2: geoLocationData.lon.toFixed(2)
        // option3: geoLocationData.fullAddress
      }
      return locationBox
}
  
  export default getLocation;