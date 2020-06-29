<template>
<div class="my-orders">
    <div class="container">
        <div class="title">
            <p>我的订单</p>
            <a href="allDd.html">查看更多订单 &gt;</a>
        </div>
        <ul>
            <li>
                <div class="ddimg">
                    <img src="@/assets/img/my02.png" />
                </div>
                <p>待付款</p>
            </li>
            <li>
                <div class="ddimg">
                    <img src="@/assets/img/my03.png" />
                </div>
                <p>待发货</p>
            </li>
            <li>
                <div class="ddimg">
                    <img src="@/assets/img/my04.png" />
                </div>
                <p>待收货</p>
            </li>
            <li>
                <div class="ddimg">
                    <img src="@/assets/img/my05.png" />
                    <div class="num">2</div>
                </div>
                <p>待评价</p>
            </li>
            <li>
                <div class="ddimg">
                    <img src="@/assets/img/my06.png" />
                </div>
                <p>退款</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-orders {
    padding: 0 0.5rem;
    margin-top: 0.8rem;
}

.my-orders .container {
    background: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
}

.my-orders .container .title {
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #f7f7f7;
}

.my-orders .container .title p {
    float: left;
    font-size: 0.8rem;
    color: #000;
    font-weight: bold;
}

.my-orders .container .title a {
    display: block;
    float: right;
    color: #666;
    font-size: 0.75rem;
}

.my-orders .container ul {
    overflow: hidden;
    padding-top: 0.3rem;
}

.my-orders .container ul li {
    float: left;
    width: 20%;
    text-align: center;
    padding: 0.5rem 0;
}

.my-orders .container ul li .ddimg {
    margin: 0 auto;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
}

.my-orders .container ul li img {
    width: 1.5rem;
    height: 1.5rem;
}

.my-orders .container ul li .ddimg .num {
    position: absolute;
    top: 0;
    right: -0.2rem;
    z-index: 99;
    background: #ff2150;
    color: #fff;
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    border-radius: 100%;
}

.my-orders .container ul li p {
    text-align: center;
    line-height: 1.5rem;
    font-size: 0.75rem;
    color: #666;
}
</style>
