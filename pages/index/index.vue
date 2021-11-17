<template>
	<view class="container">
		<view class="status_bar">
				<!-- 这里是状态栏 -->
		</view>
		<Au-search :autoFocus="false" @inputChange="inputChange" :isbackshow="false" @inputClick="inputClick" :isdisabled="true"></Au-search>
		<li v-for="(item,index) in datas">{{item.chfield}}</li>
		<button @click="requestData">textRequest</button>
		<button @click="Qrclick">扫码测试</button>
		<p>扫码结果：{{qrdata}}</p>
	</view>
</template>
<script>
	import Ausearch from '@/common/components/searchCom.vue'
	import {getPublicTable} from '@/common/api/index.js'
	export default {
		data() {
			return {
				datas:[],
				qrdata:''
			}
		},
		components: {
			'Au-search':Ausearch
		},
		methods: {
			inputChange(val){},
			// 搜索栏点击跳转搜索页
			inputClick(val){
				uni.navigateTo({
					url:"/pages/commons/search",
					success: res => {},
					fail: () => {},
					complete: (e) => {
						console.log(e)
					}
				});
			},
			// 请求示例
			getPublicTable(tabled){
				getPublicTable(tabled).then(res=>{
					console.log(res)
					this.datas=res.data.data.queryConditions
				})
			},
			requestData(){
				this.getPublicTable(1)
			},
			Qrclick(){
				uni.scanCode({
					scanType:'qrCode',
					complete:(res=>{
						console.log(res)
						this.qrdata=res.result
					})
				});
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/css/index.scss'
</style>
