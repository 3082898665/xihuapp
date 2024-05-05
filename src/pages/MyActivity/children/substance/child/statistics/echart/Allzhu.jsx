import React, { useEffect, useRef } from 'react';
// import * as echarts from 'echarts';

const Allzhu = () => {
    const chartContainer = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartContainer.current);


        const option = {
            title: {
                text: '浏览量和报名人数表',
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['报名人数', '浏览人数']
            },
            toolbox: {
                show: true,
                feature: {

                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },

                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    // prettier-ignore
                    data: ['4月10号', '4月11号', '4月12号', '4月13号', '4月14号', '4月15号']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人'
                    },
                    min: 0
                },

            ],
            series: [
                {
                    name: '报名人数',
                    type: 'bar',
                    data: [0,
                        5,
                        12,
                        18,
                        20,
                        30],

                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },

                },
                {
                    name: '浏览人数',
                    type: 'bar',
                    data: [
                        75, 88, 92, 96, 98, 97
                    ],
                    markPoint: {
                        data: [
                            { name: 'Max', value: 98, xAxis: 5, yAxis: 98 },
                            { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
                        ]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Avg' }]
                    },
                    color: '#56CCF2'
                }
            ]
        };
        myChart.setOption(option);

        // 在组件销毁时，销毁图表实例
        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartContainer} style={{ width: '100%', height: '230px' }} />;
};

export default Allzhu;