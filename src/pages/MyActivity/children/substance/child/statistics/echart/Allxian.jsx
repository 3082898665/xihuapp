import React, { useEffect, useRef } from 'react';
// import * as echarts from 'echarts';

function Allxian({ maxs }) {
    const chartContainer = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartContainer.current);
        let option
        if (maxs.length == 0) {
            option = {
                title: {
                    text: '最近报名人数',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        // dataZoom: {
                        //   yAxisIndex: 'none'
                        // },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },

                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['4月10号', '4月11号', '4月12号', '4月13号', '4月14号', '4月15号']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} 人'
                    },
                    max: 50,
                    min: 0,
                    interval: 5,
                },
                series: [
                    {
                        name: '已报名参加人数',
                        type: 'line',
                        data: [0,
                            5,
                            12,
                            18,
                            20,
                            30],
                    },
                    {
                        name: '增加的参加人数',
                        type: 'line',
                        data: [0, 5, 7, 6, 2, 10],
                        color: '#56CCF2'

                    }
                ]
            };
        } else {
            console.log(maxs)
            option = {
                title: {
                    text: '最高/低模型准确度',
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        // dataZoom: {
                        //   yAxisIndex: 'none'
                        // },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },

                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['故障零', '故障一', '故障二', '故障三', '故障四', '故障五']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} '
                    },
                    max: 100,
                    min: 40,
                    interval: 5,
                },
                series: [
                    {
                        name: '准确率最高模型',
                        type: 'line',
                        data: [Number(maxs[0][0][2][0] + maxs[0][0][2][1]),
                        Number(maxs[0][1][2][0] + maxs[0][1][2][1]),
                        Number(maxs[0][2][2][0] + maxs[0][2][2][1]),
                        Number(maxs[0][3][2][0] + maxs[0][3][2][1]),
                        Number(maxs[0][4][2][0] + maxs[0][4][2][1]),
                        Number(maxs[0][5][2][0] + maxs[0][5][2][1])],
                    },
                    {
                        name: '准确率最低模型',
                        type: 'line',
                        data: [
                            Number(maxs[1][0][2][0] + maxs[1][0][2][1]),
                            Number(maxs[1][1][2][0] + maxs[1][1][2][1]),
                            Number(maxs[1][2][2][0] + maxs[1][2][2][1]),
                            Number(maxs[1][3][2][0] + maxs[1][3][2][1]),
                            Number(maxs[1][4][2][0] + maxs[1][4][2][1]),
                            Number(maxs[1][5][2][0] + maxs[1][5][2][1])]
                        ,
                        color: '#56CCF2'
                    }
                ]
            };
        }

        myChart.setOption(option);

        // 在组件销毁时，销毁图表实例
        return () => {
            myChart.dispose();
        };
    }, [maxs]);

    return <div ref={chartContainer} style={{ width: '100%', height: '230px' }} />;
};

export default Allxian;