import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function EmissionsChart() {
    const [data1, setData1] = useState();

    const getData = useCallback(async () => {
        const response = await axios.get(
            "https://data.boston.gov/api/3/action/datastore_search?resource_id=a7b155de-10ee-48fc-bd89-fc8e31134913&limit=2483",
        );
        setData1(response);
    }, []);

    useEffect(() => {
        getData();
    }, [getData]);

    let averagePre1900 = 0;
    let average1900_1909 = 0;
    let average1910_1919 = 0;
    let average1920_1929 = 0;
    let average1930_1939 = 0;
    let average1940_1949 = 0;
    let average1950_1959 = 0;
    let average1960_1969 = 0;
    let average1970_1979 = 0;
    let average1980_1989 = 0;
    let average1990_1999 = 0;
    let average2000_2009 = 0;
    let averagePost2010 = 0;

    if (data1) {
        let listPre1900 = [];
        let list1900_1909 = [];
        let list1910_1919 = [];
        let list1920_1929 = [];
        let list1930_1939 = [];
        let list1940_1949 = [];
        let list1950_1959 = [];
        let list1960_1969 = [];
        let list1970_1979 = [];
        let list1980_1989 = [];
        let list1990_1999 = [];
        let list2000_2009 = [];
        let listPost2010 = [];
    
        for (let i = 0; i < 2483; i++) {
            let curRecord = data1['data']['result']['records'][i];
            let curRecordYear = curRecord['Year Built'];
            if (curRecordYear < 1900) {
                listPre1900.push(curRecord);
            } else if (curRecordYear >= 1900 && curRecordYear <= 1909) {
                list1900_1909.push(curRecord);
            } else if (curRecordYear >= 1910 && curRecordYear <= 1919) {
                list1910_1919.push(curRecord);
            } else if (curRecordYear >= 1920 && curRecordYear <= 1929) {
                list1920_1929.push(curRecord);
            } else if (curRecordYear >= 1930 && curRecordYear <= 1939) {
                list1930_1939.push(curRecord);
            } else if (curRecordYear >= 1940 && curRecordYear <= 1949) {
                list1940_1949.push(curRecord);
            } else if (curRecordYear >= 1950 && curRecordYear <= 1959) {
                list1950_1959.push(curRecord);
            } else if (curRecordYear >= 1960 && curRecordYear <= 1969) {
                list1960_1969.push(curRecord);
            } else if (curRecordYear >= 1970 && curRecordYear <= 1979) {
                list1970_1979.push(curRecord);
            } else if (curRecordYear >= 1980 && curRecordYear <= 1989) {
                list1980_1989.push(curRecord);
            } else if (curRecordYear >= 1990 && curRecordYear <= 1999) {
                list1990_1999.push(curRecord);
            } else if (curRecordYear >= 2000 && curRecordYear <= 2009) {
                list2000_2009.push(curRecord);
            } else {
                listPost2010.push(curRecord);
            }
        }

        averagePre1900 = Math.round(listPre1900.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / listPre1900.length);
        average1900_1909 = Math.round(list1900_1909.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1900_1909.length);  
        average1910_1919 = Math.round(list1910_1919.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1910_1919.length);    
        average1920_1929 = Math.round(list1920_1929.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1920_1929.length);   
        average1930_1939 = Math.round(list1930_1939.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1930_1939.length);      
        average1940_1949 = Math.round(list1940_1949.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1940_1949.length);  
        average1950_1959 = Math.round(list1950_1959.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1950_1959.length); 
        average1960_1969 = Math.round(list1960_1969.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1960_1969.length);  
        average1970_1979 = Math.round(list1970_1979.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1970_1979.length);    
        average1980_1989 = Math.round(list1980_1989.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1980_1989.length);   
        average1990_1999 = Math.round(list1990_1999.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list1990_1999.length);      
        average2000_2009 = Math.round(list2000_2009.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / list2000_2009.length);  
        averagePost2010 = Math.round(listPost2010.reduce((acc, val) => 
            (val['GHG Emissions (MTCO2e)'] !== 'Not Available' 
                && val['GHG Emissions (MTCO2e)'] !== '' ? 
                parseFloat(val['GHG Emissions (MTCO2e)']) + acc : acc), 0.0) / listPost2010.length);         
    }

    const chartData = [
        {
            name: '<1900',
            "GHG Emissions (MTCO2e)": averagePre1900,
        },
        {
            name: '1900-1909',
            "GHG Emissions (MTCO2e)": average1900_1909,
        },
        {
            name: '1910-1919',
            "GHG Emissions (MTCO2e)": average1910_1919,
        },
        {
            name: '1920-1929',
            "GHG Emissions (MTCO2e)": average1920_1929,
        },
        {
            name: '1930-1939',
            "GHG Emissions (MTCO2e)": average1930_1939,
        },
        {
            name: '1940-1949',
            "GHG Emissions (MTCO2e)": average1940_1949,
        },
        {
            name: '1950-1959',
            "GHG Emissions (MTCO2e)": average1950_1959,
        },
        {
            name: '1960-1969',
            "GHG Emissions (MTCO2e)": average1960_1969,
        },
        {
            name: '1970-1979',
            "GHG Emissions (MTCO2e)": average1970_1979,
        },
        {
            name: '1980-1989',
            "GHG Emissions (MTCO2e)": average1980_1989,
        },
        {
            name: '1990-1999',
            "GHG Emissions (MTCO2e)": average1990_1999,
        },
        {
            name: '2000-2009',
            "GHG Emissions (MTCO2e)": average2000_2009,
        },
        {
            name: '2010+',
            "GHG Emissions (MTCO2e)": averagePost2010,
        },
      ];

    return (
      <LineChart
        width={1200}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="GHG Emissions (MTCO2e)"
          stroke="#8f0000"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }