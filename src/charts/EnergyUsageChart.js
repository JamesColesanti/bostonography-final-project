import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Code for the line chart was adapted from user xile611's code sandbox, which can
// be found here: https://codesandbox.io/s/simple-line-chart-kec3v?file=/src/App.tsx
export default function EnergyUsageChart() {
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

    // Averages that will be used for the data points in the chart
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
        // Lists used to group records by "Year Built" value
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
    
        // Loop through records returned from call to data set API, grouping
        // based on "Year Built"
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

        // Reduce function used to iterate over all records in each list, parse out the ones
        // with missing data, and then calculate the average energy per square foot (in kBTU)
        averagePre1900 = Math.round(listPre1900.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)'])
                    + acc : acc), 0.0) / listPre1900.length);
        average1900_1909 = Math.round(list1900_1909.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1900_1909.length);
        average1910_1919 = Math.round(list1910_1919.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1910_1919.length);
        average1920_1929 = Math.round(list1920_1929.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1920_1929.length);  
        average1930_1939 = Math.round(list1930_1939.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1930_1939.length);     
        average1940_1949 = Math.round(list1940_1949.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1940_1949.length);
        average1950_1959 = Math.round(list1950_1959.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1950_1959.length);
        average1960_1969 = Math.round(list1960_1969.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1960_1969.length);
        average1970_1979 = Math.round(list1970_1979.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1970_1979.length);  
        average1980_1989 = Math.round(list1980_1989.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1980_1989.length);     
        average1990_1999 = Math.round(list1990_1999.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1990_1999.length);
        average2000_2009 = Math.round(list2000_2009.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list2000_2009.length);
        averagePost2010 = Math.round(listPost2010.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / listPost2010.length);         
    }

    // Object holding the data points for the chart
    const chartData = [
        {
            name: '<1900',
            "Energy Per Square Foot (kBTU)": averagePre1900,
        },
        {
            name: '1900-1909',
            "Energy Per Square Foot (kBTU)": average1900_1909,
        },
        {
            name: '1910-1919',
            "Energy Per Square Foot (kBTU)": average1910_1919,
        },
        {
            name: '1920-1929',
            "Energy Per Square Foot (kBTU)": average1920_1929,
        },
        {
            name: '1930-1939',
            "Energy Per Square Foot (kBTU)": average1930_1939,
        },
        {
            name: '1940-1949',
            "Energy Per Square Foot (kBTU)": average1940_1949,
        },
        {
            name: '1950-1959',
            "Energy Per Square Foot (kBTU)": average1950_1959,
        },
        {
            name: '1960-1969',
            "Energy Per Square Foot (kBTU)": average1960_1969,
        },
        {
            name: '1970-1979',
            "Energy Per Square Foot (kBTU)": average1970_1979,
        },
        {
            name: '1980-1989',
            "Energy Per Square Foot (kBTU)": average1980_1989,
        },
        {
            name: '1990-1999',
            "Energy Per Square Foot (kBTU)": average1990_1999,
        },
        {
            name: '2000-2009',
            "Energy Per Square Foot (kBTU)": average2000_2009,
        },
        {
            name: '2010+',
            "Energy Per Square Foot (kBTU)": averagePost2010,
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
          dataKey="Energy Per Square Foot (kBTU)"
          stroke="#ff8d00"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }