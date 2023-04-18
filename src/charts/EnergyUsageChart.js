import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

    let averagePre1900 = 0;
    let average1900_1919 = 0;
    let average1920_1939 = 0;
    let average1940_1959 = 0;
    let average1960_1979 = 0;
    let average1980_1999 = 0;
    let averagePost2000 = 0;

    if (data1) {
        let listPre1900 = [];
        let list1900_1919 = [];
        let list1920_1939 = [];
        let list1940_1959 = [];
        let list1960_1979 = [];
        let list1980_1999 = [];
        let listPost2000 = [];
    
        for (let i = 0; i < 2483; i++) {
            let curRecord = data1['data']['result']['records'][i];
            let curRecordYear = curRecord['Year Built'];
            if (curRecordYear < 1900) {
                listPre1900.push(curRecord);
            } else if (curRecordYear >= 1900 && curRecordYear <= 1919) {
                list1900_1919.push(curRecord);
            } else if (curRecordYear >= 1920 && curRecordYear <= 1939) {
                list1920_1939.push(curRecord);
            } else if (curRecordYear >= 1940 && curRecordYear <= 1959) {
                list1940_1959.push(curRecord);
            } else if (curRecordYear >= 1960 && curRecordYear <= 1979) {
                list1960_1979.push(curRecord);
            } else if (curRecordYear >= 1980 && curRecordYear <= 1999) {
                list1980_1999.push(curRecord);
            } else {
                listPost2000.push(curRecord);
            }
        }

        averagePre1900 = Math.round(listPre1900.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)'])
                    + acc : acc), 0.0) / listPre1900.length);
        average1900_1919 = Math.round(list1900_1919.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1900_1919.length);
        average1920_1939 = Math.round(list1920_1939.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1920_1939.length);
        average1940_1959 = Math.round(list1940_1959.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1940_1959.length);  
        average1960_1979 = Math.round(list1960_1979.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1960_1979.length);     
        average1980_1999 = Math.round(list1980_1999.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / list1980_1999.length);
        averagePost2000 = Math.round(listPost2000.reduce((acc, val) => 
            (val['Total Site Energy (kBTU)'] !== 'Not Available' 
                && val['Total Site Energy (kBTU)'] !== '' 
                && val['Gross Area (sq ft) '] !==  'Not Available' 
                && val['Gross Area (sq ft) '] !== '' ? 
                parseFloat(val['Total Site Energy (kBTU)']) / parseInt(val['Gross Area (sq ft)']) 
                    + acc : acc), 0.0) / listPost2000.length);         
    }

    const chartData = [
        {
          name: '<1900',
          "Energy Per Square Foot (kBTU)": averagePre1900,
        },
        {
          name: '1900-1919',
          "Energy Per Square Foot (kBTU)": average1900_1919,
        },
        {
          name: '1920-1939',
          "Energy Per Square Foot (kBTU)": average1920_1939,
        },
        {
          name: '1940-1959',
          "Energy Per Square Foot (kBTU)": average1940_1959,
        },
        {
          name: '1960-1979',
          "Energy Per Square Foot (kBTU)": average1960_1979,
        },
        {
          name: '1980-1999',
          "Energy Per Square Foot (kBTU)": average1980_1999,
        },
        {
          name: '2000-2019',
          "Energy Per Square Foot (kBTU)": averagePost2000,
        },
      ];

    return (
      <LineChart
        width={800}
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