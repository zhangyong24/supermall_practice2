<template>
 
 <div class="param-info" v-if="Object.keys(itemParams).length !== 0">
    <p>参数信息</p>
    <table :key="index" class="info-size" v-for="(table, index) in itemParams.rule.tables">
      <tr :key="indey" v-for="(tr, indey) in table">
        <td :key="indez" v-for="(td, indez) in tr">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr :key="index" v-for="(info, index) in itemParams.info.set">
        <td class="info-param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>
    <!-- <div class="info-img" v-if="paramInfo.info.images">
      <img :src="paramInfo.info.images[0]" alt="" />
    </div> -->
    
  </div>
</template>

<script>
export default {
  name: 'datail_Params_info',
  props: {
     itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script> 

<style scoped>
.param-info {
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info p {
  font-size: 15px;
  margin-bottom: 10px;
}

.param-info table {
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.info-param-key {
  width: 95px;
}

.info-param {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}

.info-img img {
  width: 100%;
}

</style>