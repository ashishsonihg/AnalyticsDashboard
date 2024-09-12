export default {
  color: ['#80FFA5', '#00DDFF', '#FFBF00'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['All Users', 'Premium', 'Premium Plus'],
    textStyle: { color: '#fff' }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Oct 23', 'Nov 23', 'Dec 23', 'Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'Jul 24', 'Aug 24', 'Sep 24'],
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
      formatter: function (value, index) {
        return value + 'M';
      }
    }
    }
  ],
  series: [
    {
      name: 'All Users',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#80FFA5'
      },
      emphasis: {
        focus: 'series'
      },
      data: [103, 112, 119, 127, 142, 149, 159, 163, 178, 192, 201, 212]
    },
    {
      name: 'Premium',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#00DDFF'
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 25, 24, 24, 20, 29, 30, 32, 30, 36, 38, 40]
    },
    {
      name: 'Premium Plus',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: '#FFBF00'
      },
      emphasis: {
        focus: 'series'
      },
      data: [10, 12, 13, 13, 10, 14, 15, 16, 15, 18, 19, 21]
    }
  ]
}
