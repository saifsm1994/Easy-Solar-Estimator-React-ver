// import $ from 'jquery';
import parseSolarReturn from './parseSolarReturn';
import solarDataArray from '../../src/solarDataArray.json'

// eslint-disable-next-line
const getSolar = (updateDataObjSmall, updateDataObjLarge,updateDataObjMonthly) => {
  let geoLocationData = JSON.parse(localStorage.getItem('geoLocationData'));
  const latGDRound = Math.floor(geoLocationData.lat);
  const lonGDRound = Math.floor(geoLocationData.lon);

  //Chooses which entry on the array to pull
  const arrayNumber = ((latGDRound + 90) * 360) + lonGDRound + 180;
  let solarData = parseSolarReturn(solarDataArray, arrayNumber);
    // console.log( " solar dat equals = " + solarData[0].header)


    updateDataObjSmall(solarData[0]);
    updateDataObjLarge(solarData[1]);
    updateDataObjMonthly(solarData[2]);

    return solarData;



}
  
  export default getSolar;