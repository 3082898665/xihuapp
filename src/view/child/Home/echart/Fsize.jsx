import React, { useEffect, useRef, useState } from 'react';
// import * as echarts from 'echarts';

export default function Fsize({ arr }) {
  const chartContainer = useRef(null);

  useEffect(() => {
    console.log(arr)
    let newarr = [90, 80, 70, 92, 93, 88]


    const myChart = echarts.init(chartContainer.current);


    const option = {

      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      legend: {
        data: ['线下活动', '大会训练营', '大会直播', '大会广播', '直播回放', '全部活动']
      },
      series: [

        {
          name: 'Actual',
          type: 'funnel',
          left: '10%',
          width: '80%',
          maxSize: '80%',
          color: ['#0052D4', '#0051d497', '#0051d45c', '#0051d421', '#155cce14', '#155cce0f'],

          label: {
            position: 'inside',
            formatter: '{c}%',
            color: '#000000' // 修改为黑色
          },
          itemStyle: {
            opacity: 0.8,
            borderColor: '#fff',
            borderWidth: 2,

          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}Actual: {c}%'
            }
          },
          data: [
            { value: newarr[4], name: '直播回放' },
            { value: newarr[5], name: '全部活动' },
            { value: newarr[0], name: '大会广播' },
            { value: newarr[3], name: '大会直播' },
            { value: newarr[1], name: '线下活动' },
            { value: newarr[2], name: '大会训练营' },


          ],
          // Ensure outer shape will not be over inner shape when hover.
          z: 100
        }
      ]
    };
    myChart.setOption(option);

    // 在组件销毁时，销毁图表实例
    return () => {
      myChart.dispose();
    };
  }, [arr]);

  return <div ref={chartContainer} style={{ height: '90%', marginLeft: '-3%' }} />;
};

;