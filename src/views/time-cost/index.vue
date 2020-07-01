<template>
<div class="time-cost-box">
    <div class="buy-box">
        <p><span>限时</span>抢购</p>
        <a class="more"></a>
        <a class="btn">全场一折起</a>
    </div>
    <div class="cost-goods-box">
        <van-grid :column-num="4">
            <van-grid-item v-for="(item,index) in costItems" :key="index">
                <img :src="item.img" />
                <span class="good-text van-ellipsis">{{ item.text }}</span>
            </van-grid-item>
        </van-grid>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            costItems: [
                {
                    "text": "特惠优质电饭煲",
                    "img": require('@/assets/img/timebuy1.png'),
                    "url": ""
                },
                {
                    "text": "达芙妮包包",
                    "img": require('@/assets/img/timebuy2.png'),
                    "url": ""
                },
                {
                    "text": "特百惠水杯",
                    "img": require('@/assets/img/timebuy3.png'),
                    "url": ""
                },
                {
                    "text": "易捷充电宝",
                    "img": require('@/assets/img/timebuy4.png'),
                    "url": ""
                }
            ]
        }
    },
}
</script>

<style scoped>
.time-cost-box {
    border-bottom: 1px solid #f5f5f5;
    background: #fff;
    border-top: 1px solid #f5f5f5;
}

.time-cost-box .buy-box {
    padding: 0.5rem;
    height: 1.8rem;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    padding-right: 0.2rem;
}

.time-cost-box .buy-box p {
    font-size: 0.875rem;
    float: left;
    height: 1.8rem;
    line-height: 1.8rem;
    max-width: 50%;
    overflow: hidden;
    color: #333;
}

.time-cost-box .buy-box p span {
    color: #ff2150;
}

.time-cost-box .buy-box a.more {
    float: right;
    margin-right: 0.1rem;
    height: 1.5rem;
    width: 1rem;
    margin-top: 0.25rem;
    background-image: url(~@/assets/img/more.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.time-cost-box .buy-box a.btn {
    display: block;
    float: right;
    padding: 0 0.3rem;
    box-sizing: border-box;
    border: 1px solid #ff2150;
    border-radius: 2px;
    height: 1.6rem;
    line-height: 1.6rem;
    margin-top: 0.1rem;
    margin-right: 0.2rem;
    font-size: 0.75rem;
    color: #ff2150;
}
.time-cost-box .cost-goods-box {
    overflow: hidden;
}
.time-cost-box .cost-goods-box .good-text {
    width: 4rem;
}
.time-cost-box .cost-goods-box img{
    width: 80%;
}
</style>