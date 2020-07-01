<template>
<div class="hotContainer">
    <div class="hot-M">
        <div class="hot-guoji"></div>
        <div class="hot-C"></div>
        <div class="hot-R"></div>
    </div>
    <div class="hot-M">
        <div class="hot-guoji-2"></div>
        <div class="hot-C-2"></div>
        <div class="hot-R-2"></div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hotContainer {
    width: 100%;
}

.hotContainer .hot-M {
    height: 7rem;
    overflow: hidden;
    border-bottom: 1px solid #f5f5f5;
}

.hotContainer .hot-M .hot-guoji {
    border-right: 1px solid #f5f5f5;
    box-sizing: border-box;
    width: 50%;
    height: 7rem;
    float: left;
    background-image: url("~@/assets/img/hot-guoji.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.hotContainer .hot-M .hot-C {
    box-sizing: border-box;
    border-right: 1px solid #f5f5f5;
    width: 25%;
    height: 7rem;
    float: left;
    background-image: url("~@/assets/img/hot-C.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.hotContainer .hot-M .hot-R {
    width: 25%;
    height: 7rem;
    float: left;
    background-image: url("~@/assets/img/hot-R.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.hotContainer .hot-M .hot-guoji-2 {
    border-right: 1px solid #f5f5f5;
    box-sizing: border-box;
    width: 50%;
    height: 7rem;
    float: left;
    background-image: url("~@/assets/img/hot-guoji-2.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.hotContainer .hot-M .hot-C-2 {
    box-sizing: border-box;
    border-right: 1px solid #f5f5f5;
    width: 25%;
    height: 7rem;
    float: left;
    background-image: url("~@/assets/img/hot-C-2.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}

.hotContainer .hot-M .hot-R-2 {
    width: 25%;
    height: 7rem;
    float: left;
    background-image: url("~@/assets/img/hot-R-2.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
}
</style>