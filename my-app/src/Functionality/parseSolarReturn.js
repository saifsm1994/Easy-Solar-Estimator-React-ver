
/* eslint-disable */
const parseSolarReturn = (data, arrayNumber) => {
   
   const chosenData = data[arrayNumber];
   const ghiJan = chosenData[2];   const ghiFeb = chosenData[3];   const ghiMar = chosenData[4];
   const ghiApr = chosenData[5];   const ghiMay = chosenData[6];   const ghiJun = chosenData[7];
   const ghiJul = chosenData[8];   const ghiAug = chosenData[9];   const ghiSep = chosenData[10];
   const ghiOct = chosenData[11];  const ghiNov = chosenData[12];   const ghiDec = chosenData[13];
   const ghiAnn = chosenData[14];

   const highest = Math.max(ghiJan, ghiFeb, ghiMar, ghiApr, ghiMay, ghiJun, ghiJul, ghiAug, ghiSep, ghiOct, ghiNov, ghiDec);
   const lowest = Math.min(ghiJan, ghiFeb, ghiMar, ghiApr, ghiMay, ghiJun, ghiJul, ghiAug, ghiSep, ghiOct, ghiNov, ghiDec);
   const total = (ghiJan + ghiFeb + ghiMar + ghiApr + ghiMay + ghiJun + ghiJul + ghiAug + ghiSep + ghiOct + ghiNov + ghiDec).toFixed(3);
   const ghiAnnTotal = ghiAnn * 365;


    const ghiAnnMax = 6.98;
    const ghiGlobalAverage = 3.9429875;
   //Standard Deviation for Avg
   const ghiGlobalStDev = 1.436094329; //Done in excel, get detailed overview for writeup TODO
   //Present Deviations = CURRENT - GLOBAL / DEV
   const stDevsFromAvg = (ghiAnn - ghiGlobalAverage) / ghiGlobalStDev;
   //3 digits version
   const stDevsFromAvgRounded = stDevsFromAvg.toFixed(3); //Reduced to 3 decimel places for visual ease 
   //Median Global GHI
   const ghiAnnMedian = 3.52;
   //Percentage compared to max
   const ghiCompAnn = ((ghiAnn / ghiGlobalAverage) * 100).toFixed(1);
   const ghiCompAnnMax = ((ghiAnn / ghiAnnMax) * 100).toFixed(1);
   let relativeTell = "";
    if(ghiAnn > ghiGlobalAverage){relativeTell = "% above"}else{relativeTell = "% below"}

    const avgGrossAnnualGhi = (ghiJan * 31) +   (ghiFeb * 28) + (ghiMar * 31) + (ghiApr * 30) + (ghiMay * 31) + (ghiJun * 30) + (ghiJul * 31) + (ghiAug * 31) + (ghiSep * 30) + (ghiOct * 31) + (ghiNov * 30) + (ghiDec * 31);
    const areaOfPanel = 2; 
    const effOfPanel = .167;
    const perfRatio = .80;
    let attainableEnergy =  areaOfPanel * effOfPanel * avgGrossAnnualGhi * perfRatio;
        attainableEnergy = attainableEnergy.toFixed(2);
        if(attainableEnergy > 722){attainableEnergy = 722;}

    const costOf1PanelHigh = 1062.6;
    const costOf1PanelLow = ((1849 / 1200)*330) ;
    const degradationRate = 0.995; // accounts for median .5 percent degredation per year
    const degradationRate10Year = Math.pow(degradationRate,10); // Photovoltaic Degradation Rates — An Analytical Review
    const degradationRate20Year = Math.pow(degradationRate,20);
    const yearlyCost1DayHigh = parseInt((costOf1PanelHigh));
    const yearlyCost1DayLow = parseInt((costOf1PanelLow));
    const yearlyCost1YrHigh = (costOf1PanelHigh / attainableEnergy).toFixed(2);
    const yearlyCost1YrLow = (costOf1PanelLow / attainableEnergy).toFixed(2);
    const yearlyCost10YrHigh =  (1/10 * (costOf1PanelHigh / (attainableEnergy*degradationRate10Year))).toFixed(2);
    const yearlyCost10YrLow =  (1/10 * (costOf1PanelLow / (attainableEnergy*degradationRate10Year))).toFixed(2);
    const yearlyCost20YrHigh =  (1/20 * (costOf1PanelHigh / (attainableEnergy*degradationRate20Year))).toFixed(2);
    const yearlyCost20YrLow =  (1/20 * (costOf1PanelLow / (attainableEnergy*degradationRate20Year))).toFixed(2);




    const percentsJan = Math.round((ghiJan / total) * 100);    const percentsFeb = Math.round((ghiFeb / total) * 100);
    const percentsMar = Math.round((ghiMar / total) * 100);    const percentsApr = Math.round((ghiApr / total) * 100);
    const percentsMay = Math.round((ghiMay / total) * 100);    const percentsJun = Math.round((ghiJun / total) * 100);
    const percentsJul = Math.round((ghiJul / total) * 100);    const percentsAug = Math.round((ghiAug / total) * 100);
    const percentsSep = Math.round((ghiSep / total) * 100);    const percentsOct = Math.round((ghiOct / total) * 100);
    const percentsNov = Math.round((ghiNov / total) * 100);    const percentsDec = Math.round((ghiDec / total) * 100);

    
    //PanelOutputSection
    const grossGhiJan = (ghiJan * 31).toFixed(1);    const grossGhiFeb = (ghiFeb * 28).toFixed(1);
    const grossGhiMar = (ghiMar * 31).toFixed(1);    const grossGhiApr = (ghiApr * 30).toFixed(1);
    const grossGhiMay = (ghiMay * 31).toFixed(1);    const grossGhiJun = (ghiJun * 30).toFixed(1);
    const grossGhiJul = (ghiJul * 31).toFixed(1);    const grossGhiAug = (ghiAug * 31).toFixed(1);
    const grossGhiSep = (ghiSep * 30).toFixed(1);    const grossGhiOct = (ghiOct * 31).toFixed(1);
    const grossGhiNov = (ghiNov * 30).toFixed(1);    const grossGhiDec = (ghiDec * 31).toFixed(1);
    
    let attainableEnergyJan =  areaOfPanel * effOfPanel * grossGhiJan * perfRatio;
    attainableEnergyJan = attainableEnergyJan.toFixed(1);

    let attainableEnergyFeb =  areaOfPanel * effOfPanel * grossGhiFeb * perfRatio;
     attainableEnergyFeb = attainableEnergyFeb.toFixed(1);

     let attainableEnergyMar =  areaOfPanel * effOfPanel * grossGhiMar * perfRatio;
     attainableEnergyMar = attainableEnergyMar.toFixed(1);
    
    let attainableEnergyApr =  areaOfPanel * effOfPanel * grossGhiApr * perfRatio;
     attainableEnergyApr = attainableEnergyApr.toFixed(1);
    
    let attainableEnergyMay =  areaOfPanel * effOfPanel * grossGhiMay * perfRatio;
     attainableEnergyMay = attainableEnergyMay.toFixed(1);
    
    let attainableEnergyJun =  areaOfPanel * effOfPanel * grossGhiJun * perfRatio;
     attainableEnergyJun = attainableEnergyJun.toFixed(1);
    
    let attainableEnergyJul =  areaOfPanel * effOfPanel * grossGhiJul * perfRatio;
     attainableEnergyJul = attainableEnergyJul.toFixed(1);
    
    let attainableEnergyAug =  areaOfPanel * effOfPanel * grossGhiAug * perfRatio;
     attainableEnergyAug = attainableEnergyAug.toFixed(1);
    
    let attainableEnergySep =  areaOfPanel * effOfPanel * grossGhiSep * perfRatio;
     attainableEnergySep = attainableEnergySep.toFixed(1);
    
    let attainableEnergyOct =  areaOfPanel * effOfPanel * grossGhiOct * perfRatio;
     attainableEnergyOct = attainableEnergyOct.toFixed(1);
    
    let attainableEnergyNov =  areaOfPanel * effOfPanel * grossGhiNov * perfRatio;
     attainableEnergyNov = attainableEnergyNov.toFixed(1);
    
    let attainableEnergyDec =  areaOfPanel * effOfPanel * grossGhiDec * perfRatio;
     attainableEnergyDec = attainableEnergyDec.toFixed(1);















   //create cards
    //card 1 Light recieved
    let lRBox = {
        header: "Light Recieved",
        option1 : parseInt(ghiAnnTotal) + " kWh",
        option2 : lowest + " - " + highest + " kWh",
        option3 : null,
        option4 : "Global Horizontal Irradiance",
        option1Text : "Yearly GHI: ",
        option2Text : "Yearly Range (/Day): ",
        option3Text : null,
        option4Text : "Value: ",
        subheadingStart: null,
        subheadingEnd: null,
        bigContent:  ghiAnn + ' kWh/m²/day',
        bigContentText: null
    }

    //card 2 Compared to elsewhere
    let cPBox = {

        header: "Relative Values",
        option1 : null ,
        option2 : ghiAnnMax + "kWh/m²/day",
        option3 : ghiGlobalAverage.toFixed(2) + "kWh/m²/day",
        option4 : null,
        option1Text : "% of global maximum: ",
        option2Text : "Global Max Avg Ghi: ",
        option3Text : "Global Average: ",
        option4Text : null,
        subheadingStart: null,
        subheadingEnd: "",
        bigContent:  ghiCompAnnMax + "% of Global Maximum",
        bigContentText: ""
    }

    //card 3 Potential

    //Card 4 Value explained
    let vBox = {

        header: "Is Solar Power Viable for me?",
        option1 : " ",
        option2 : attainableEnergy + " kWh/Year" ,
        option3 : "$" + yearlyCost1DayLow +" - " + "$" + yearlyCost1DayHigh,
        option4 : "[" + yearlyCost1YrLow + "-" + yearlyCost1YrHigh + "][" + yearlyCost10YrLow + "-" + yearlyCost10YrHigh  + "][" + yearlyCost20YrLow + "-" + yearlyCost20YrHigh + "]",
        option1Text : "How much power can I obtain from a given panel?",
        option2Text : "Power Output: ",
        option3Text : "Cost (One time payment): ",
        option4Text : "Cost per kWh (1yr/10yr/20yr): ",
        subheadingStart: null,
        subheadingEnd: "",
        bigContent:  null,
        bigContentText: "",
        Tooltip: "Equivalent to:",
        TooltipListItem1: attainableEnergy/0.1 +" hrs of Tv (100W/50In)",
        TooltipListItem2: parseInt(attainableEnergy/ 107) +" % of avg. Households needs",
        TooltipListItem3: null
    }




    let monBox = {
       percent: [percentsJan +"%", percentsFeb +"%",
        percentsMar +"%", percentsApr +"%", percentsMay +"%",
        percentsJun +"%", percentsJul +"%",  percentsAug +"%", percentsSep +"%",
        percentsOct +"%", percentsNov +"%", percentsDec +"%"],
       attainable:  [attainableEnergyJan, attainableEnergyFeb, attainableEnergyMar,
        attainableEnergyApr, attainableEnergyMay, attainableEnergyJun, attainableEnergyJul,
        attainableEnergyAug, attainableEnergySep, attainableEnergyOct, attainableEnergyNov, attainableEnergyDec],
       gross: [grossGhiJan, grossGhiFeb, grossGhiMar, grossGhiApr,
        grossGhiMay, grossGhiJun, grossGhiJul, grossGhiAug,
        grossGhiSep, grossGhiOct, grossGhiNov, grossGhiDec],
       headings: ["Month","Percentage of Yearly Light", "Total light (kWh/m²)","Capturable Energy (kWh/m²)"],
       months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }


    return [[lRBox, cPBox], vBox, monBox];

//    let locationBox : , {
//     header: "Location",
//     // heading1: "Location: ",
//     heading2:  "County: ", //city
//     heading3: "Lat: ", //Country
//     heading4: "Lon: ",
//     heading5: "Full Address: ",
//     heading6: "Accuracy 100 km",
//     content1: geoLocationData.city,
//     content2: geoLocationData.country,
//     content3: geoLocationData.lat.toFixed(2),
//     content4: geoLocationData.lon.toFixed(2),
// //     content5: geoLocationData.fullAddress
// percentsJan : percentsJan,
// percentsFeb : percentsFeb,
// percentsMar : percentsMar,
// percentsApr : percentsApr,
// percentsMay : percentsMay,
// percentsJun : percentsJun,
// percentsJul : percentsJul,
// percentsAug : percentsAug,
// percentsSep : percentsSep,
// percentsOct : percentsOct,
// percentsNov : percentsNov,
// percentsDec : percentsDec,
// attainableEnergyJan: attainableEnergyJan,
// attainableEnergyFeb: attainableEnergyFeb,
// attainableEnergyMar: attainableEnergyMar,
// attainableEnergyApr: attainableEnergyApr,
// attainableEnergyJun: attainableEnergyJun,
// attainableEnergyJul: attainableEnergyJul,
// attainableEnergyAug: attainableEnergyAug,
// attainableEnergySep: attainableEnergySep,
// attainableEnergyOct: attainableEnergyOct,
// attainableEnergyNov: attainableEnergyNov,
// attainableEnergyDec: attainableEnergyDec,
// grossGhiJan : grossGhiJan,    
// grossGhiFeb : grossGhiFeb,    
// grossGhiMar : grossGhiMar,
// grossGhiMay : grossGhiMay,
// grossGhiJun : grossGhiJun,
// grossGhiJul : grossGhiJul,
// grossGhiAug : grossGhiAug,
// grossGhiSep : grossGhiSep,
// grossGhiOct : grossGhiOct,
// grossGhiNov : grossGhiNov,
// grossGhiDec : grossGhiDec
//   }

}
  
  export default parseSolarReturn;