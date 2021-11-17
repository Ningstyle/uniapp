<template>
	<view class="container">
		<view class="status_bar">
				<!-- 这里是状态栏 -->
		</view>
		<Au-search :autoFocus="true" @inputChange="inputChange" :isbackshow="true" :isdisabled="false" :isclearShow="true"></Au-search>
	</view>
</template>
<script>
	import Ausearch from '@/common/components/searchCom.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			'Au-search':Ausearch
		},
		methods: {
			inputChange(val){
				console.log(val)
			},
		}
	}
</script>

<style lang="scss" scoped>
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
 }
</style>
