<template>
  <div class="recomond-container">
    <div class="buy-box">
      <p>
        <van-icon name="like" color="#ff2150" size="14"></van-icon>
        <span>猜你喜欢</span>
      </p>
      <!--
      <a class="more">更多</a>
      -->
    </div>
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <a href>
          <img :src="item.img" />
          <p class="title">{{ item.title }}</p>
          <p class="price">
            ￥{{ item.price }}
            <span>￥{{ item.orginPrice }}</span>
            <img src="@/assets/img/cart.png" />
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {
          url: "",
          img: require("@/assets/img/21.png"),
          price: 29.9,
          orginPrice: 49.9,
          title: "三利 毛巾家纺纯棉吸水 提缎面巾两条装"
        },
        {
          url: "",
          img: require("@/assets/img/22.png"),
          price: 198,
          orginPrice: 286,
          title: "韩国代购正品超爆款 "
        },
        {
          url: "",
          img: require("@/assets/img/23.png"),
          price: 29.9,
          orginPrice: 49.9,
          title: "三利 毛巾家纺纯棉吸水 提缎面巾两条装"
        },
        {
          url: "",
          img: require("@/assets/img/24.png"),
          price: 198,
          orginPrice: 286,
          title: "韩国代购正品超爆款 休闲迷彩磨砂真皮运动鞋女单鞋"
        },
        {
          url: "",
          img: require("@/assets/img/25.png"),
          price: 29.9,
          orginPrice: 49.9,
          title: "三利 毛巾家纺纯棉吸水 提缎面巾两条装"
        },
        {
          url: "",
          img: require("@/assets/img/26.png"),
          price: 198,
          orginPrice: 286,
          title: "韩国代购正品超爆款 休闲迷彩磨砂真皮运动鞋女单鞋"
        }
      ]
    };
  }
};
</script>

<style scoped>
.recomond-container {
  width: 100%;
  background: #fff;
}

.recomond-container .buy-box {
  padding: 0.5rem;
  height: 1.8rem;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
  padding-right: 0.2rem;
}

.recomond-container .buy-box p {
  font-size: 0.875rem;
  float: left;
  height: 1.8rem;
  line-height: 1.8rem;
  overflow: hidden;
  color: #333;
}

.recomond-container .buy-box p span {
  color: #333;
  padding-left: 0.3rem;
}

.recomond-container .buy-box p i.tip {
  font-size: 0.75rem;
  padding-left: 0.5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  color: #666;
}

.recomond-container .buy-box a.more {
  float: right;
  margin-right: 0.1rem;
  padding-right: 1rem;
  height: 1.8rem;
  line-height: 1.8rem;
  background-image: url(~@/assets/img/more.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 40% 70%;
}

.recomond-container .buy-box a.btn {
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

.recomond-container ul li {
  float: left;
  background: #fff;
  width: 50%;
  border-bottom: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
  box-sizing: border-box;
  overflow: hidden;
}

.recomond-container ul li a {
  display: block;
  padding: 0.5rem;
}

.recomond-container ul li img {
  max-width: 100%;
  max-height: 100%;
  border: 0;
}

.recomond-container ul li p.title {
  height: 2.5rem;
  font-size: 0.8rem;
  padding-top: 0.5rem;
  color: #333;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.recomond-container ul li p.price {
  color: #ff2150;
  padding-top: 0.5rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.875rem;
}

.recomond-container ul li p.price span {
  padding-left: 1rem;
  color: #999;
  text-decoration: line-through;
  font-size: 0.7rem;
  height: 1rem;
  line-height: 1rem;
}
.recomond-container ul li p.price img {
  float: right;
}
</style>