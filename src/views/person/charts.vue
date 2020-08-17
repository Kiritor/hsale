<template>
  <div id="myChart" class="charts-container"></div>
</template>
<script>
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "销量情况",
          x: "left",
          padding: [20, 0, 0, 20],
          textStyle: {
            fontWeight: 700,
            fontSize: 14,
            color: "#555", // 主标题文字颜色
          },
        },
        dataZoom: {
        orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
                                   // 'horizontal' ¦ 'vertical'
         x: 28,            // 水平安放位置，默认为根据grid参数适配，可选为：
                                   // {number}（x坐标，单位px）
        // y: {number},            // 垂直安放位置，默认为根据grid参数适配，可选为：
                                   // {number}（y坐标，单位px）
        // width: {number},        // 指定宽度，横向布局时默认为根据grid参数适配
        height: 24,       // 指定高度，纵向布局时默认为根据grid参数适配
        backgroundColor: 'rgba(0,0,0,0)',       // 背景颜色
        dataBackgroundColor: '#eee',            // 数据背景颜色
        fillerColor: 'rgba(255,255,255,0.2)',   // 填充颜色
        handleColor: 'rgba(0,0,0,0.8)'     // 手柄颜色
    },
    
        // ---  提示框 ----
        tooltip: {
          show: true, // 是否显示提示框，默认为true
          trigger: "item", // 数据项图形触发
          showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          hideDelay: 100,            // 隐藏延迟，单位ms
          transitionDuration: 0.4, 
          backgroundColor: 'rgba(0,0,0,0.3)',     
          borderRadius: 0,           //边框角度
          axisPointer: {
            // 指示样式
            type: "cross",
            axis: "auto",
          },
          padding: 5,
          textStyle: {
            // 提示框内容的样式
            color: "#fff",
          }
        },

        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            barWidth: 14,
            showBackground: false,
            backgroundStyle: {
                //color: '#000',
            },
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                emphasis: {
                    label: {
                        show: false
                    },
                    lineStyle: {
                        
                    }
                },
                data: [
                    {type: 'average', name: '平均值'}
                ]
            },
             markPoint: {
                symbol: 'pin',
                symbolRotate: 10,
                label: {
                    rotate: 0,
                },
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
.charts-container {
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  height: 300px;
  background-color: #ffffff;
}
</style>