<template>
<div>
    <div class="page-header">
        <div class="avator-box">
            <div class="avator">
                <img src="@/assets/img/tx.jpg" class="tt" />
                <div class="btR">
                    <p class="p1">小梁~</p>
                </div>
            </div>
            <div class="right-box">
                <a href="shezhi.html">设置</a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="statis">
            <ul>
                <li>
                    <a href="javascript:void()">
                        <p class="p1">13</p>
                        <p class="p2">收藏夹</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:void()">
                        <p class="p1">1</p>
                        <p class="p2">关注商品</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:void()">
                        <p class="p1">3</p>
                        <p class="p2">浏览记录</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
    <!-- 积分区 -->
    <my-part></my-part>
    <!-- 订单区 -->
    <my-orders></my-orders>
    <!-- 我的优惠券 -->
    <my-counp></my-counp>
    <!-- 工具按钮区 -->
    <my-tools></my-tools>
    <!-- 商品推荐区 -->
    <push-goods-list></push-goods-list>
    <div class="box"></div>
</div>
    
</template>

<script>
import MyPart from "./my-part";
import MyOrders from "./my-orders"
import MyCounp from "./my-counp"
import MyTools from "./my-tools"
import PushGoodsList from "./my-push"

export default {
    components: {
        MyPart,MyOrders,MyCounp,MyTools,PushGoodsList
    }
};
</script>

<style scoped>
.page-header {
    width: 100%;
    background-size: 100%;
    background: url("~@/assets/img/mybg.jpg") repeat-y;
}

.page-header .avator-box {
    padding: 0.8rem 0.8rem 0.4rem 0.8rem;
}

.avator-box .avator-box .avator {
    float: left;
    width: 80%;
}

.page-header .avator-box .avator img.tt {
    float: left;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
}

img {
    max-height: 100%;
    max-width: 100%;
    border: 0;
}

.page-header .avator-box .avator .btR {
    float: left;
    padding-left: 1rem; 
    height: 48px;
    line-height: 48px;
}

.page-header .avator-box .btR .p1 {
    color: #fff;
    font-size: 1.2rem;
}

.page-header .right-box {
    float: right;
    width: 20%;
}

.page-header .right-box a {
    display: block;
    color: #fff;
    text-align: right;
    font-size: 0.85rem;
}

.page-header .statis {
    width: 80%;
    margin: 0 auto;
    padding: 0rem 0 2.5rem;
}

.page-header .statis ul {
    overflow: hidden;
}

.page-header .statis ul li {
    float: left;
    width: 33%;
}

.page-header .statis ul li .p1 {
    text-align: center;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1.5rem;
}

.page-header .statis ul li .p2 {
    text-align: center;
    color: #fff;
    font-size: 0.75rem;
}

.clear {
    clear: both;
}
.box {
    height: 4rem;
}
</style>
