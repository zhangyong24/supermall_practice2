<template>
  <div class="profile">
    <nav_bar class="nav-bar">
      <div  slot="center">zhangyong24 练习项目 仿蘑菇街</div>
    </nav_bar>
    <profile_userInfo class="profile-userInfo"></profile_userInfo>
    <profile_account_info></profile_account_info>
    <profile_listview :list-data="orderList"></profile_listview>
  </div>
</template>

<script>
import nav_bar from "components/common/nav_bar/nav_bar";
import profile_userInfo from "./profile_components/profile_userInfo";
import profile_account_info from "./profile_components/profile_account_info";
import profile_listview from "./profile_components/profile_listview";
export default {
  name: "profile",
  components: {
    nav_bar,
    profile_userInfo,
    profile_account_info,
    profile_listview,
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" },
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
.profile {
  background-color: #f2f2f2;
}

.nav-bar {
 
  background-color: #ff8198;
  line-height: 44px;
  height: 44px;
  text-align: center;
  display: flex;
  justify-content: center;
  color:#fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

}
.profile-userInfo{
  margin-top: 44px;
}
</style>
