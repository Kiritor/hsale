<template>
<div class="my-counp">
    <div class="container">
        <div class="title">
            <p>我的优惠券</p>
            <a>查看更多优惠券 &gt;</a>
        </div>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-counp {
    padding: 0 1rem;
    margin-top: 0.8rem;
}

.my-counp .container {
    background: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
}

.my-counp .container .title {
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #f7f7f7;
}

.my-counp .container .title p {
    float: left;
    font-size: 0.8rem;
    color: #000;
    font-weight: bold;
}

.my-counp .container .title a {
    display: block;
    float: right;
    color: #666;
    font-size: 0.75rem;
}
</style>