<template>
    <div class="canvas"></div>
</template>
<script>
export default {
    name: "echarts",
    data () {
        return {
            chart: undefined,
        };
    },
    props: {
        option: {
            required: false,
            type: Object,
            default: () => {
                return {};
            }
        },
    },
    watch: {
        option: {
            handler: "updateChart",
            immediate: false,
            deep: false
        }
    },
    mounted: function () {
      this.chart = this.$echarts.init(this.$el);
      this.updateChart();
    },
    methods: {
        updateChart () {               
            if (this.chart._chartsViews.length > 0) {
                this.chart.clear();
            }
            
            this.chart.setOption(this.option);
            var _this = this;
            this.chart.on('dataZoom',function(params){
             _this.$nextTick(() => {
                let series = _this.chart.getModel().option.series[0]; // 获取数据
                var startindex =  _this.chart.getOption().dataZoom[0].startValue;
                var endindex =  _this.chart.getOption().dataZoom[0].endValue;
                var name = series.name;
                var data = series.data;
                var newData = [];
                for(var i=startindex;i<=endindex;i++){
                        newData.push(data[i]);
                }
                switch(name){
                   case 'CPU利用率':
                   case '时延':
                   case '输入速率':
                   case '输入带宽利用率':
                   case '输入审批带宽利用率':
                       _this.$parent.countNumber(newData);
                       break;
                   case '内存利用率': 
                   case '输出速率': 
                   case '输出带宽利用率': 
                   case '输出审批带宽利用率': 
                      _this.$parent.countRightNumber(newData);
                      break;    
                    default : break;   
                }
             });
            });
 


            window.addEventListener("resize",()=>{
              this.chart.resize();
            })
            
        }
    }
};
</script>
<style scoped lang="scss" >
#canvas {
    width: 100%;
    height: 100%;
}
</style>