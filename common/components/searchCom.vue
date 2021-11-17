<template>
	<view class="container">
		<div class="serChall">
			<div class="searchBox" :style="{width:auWidth}">
				<icon type="search" size="18" class="searchIcon"></icon>
				<input type="text" 
				:placeholder="placeholder"
				:focus="autoFocus"
				v-model="searchValue"
				@change="inputChange"
				:disabled="isdisabled"
				@click="inputClick"
				:confirm-type="confirmText"/>
				<icon type="clear" size="18" class="clearIcon" @click="clearVlaue" v-if="isclearShow"></icon>
			</div>
			<view class="back" v-if="isbackshow" @click="back">取消</view>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue:'',
				auWidth:'86%'
			}
		},
		props:{
			//placeholder文字定义
			placeholder:{
				default:'可搜索律师/案情'
			},
			//是否默认聚焦
			autoFocus:{
				default:false
			},
			// 是否显示清除按钮
			isclearShow:{
				default:false
			},
			// 是否显示取消按钮
			isbackshow:{
				default:false
			},
			// 是否禁用输入框
			isdisabled:{
				default:false
			},
			// 键盘右下角文字
			confirmText:{
				default:'搜索'
			}
		},
		methods: {
			// input点击事件
			inputChange(){
				this.$emit('inputChange',this.searchValue)
			},
			inputClick(){
				this.$emit('inputClick',this.searchValue)
			},
			// 清空事件
			clearVlaue(){
				this.searchValue=''
			},
			back(){
				uni.navigateBack()
			}
		},
		mounted(){
			if(this.isbackshow){
				this.auWidth='86%'
			}else{
				this.auWidth="100%"
			}
		}
	}
</script>

<style lang="scss" scoped>
.container {
	font-size: 14px;
	line-height: 24px;
	.serChall{
		width:100%;
		height:30px;
		padding:0 5px;
		box-sizing: border-box;
		.searchBox{
			width:86%;
			height:100%;
			float: left;
			position: relative;
			margin-right:10px;
			icon.searchIcon{
				position: absolute;
				top:3.5px;
				left:10px;
			}
			icon.clearIcon{
				position: absolute;
				top:3.5px;
				right:10px;
			}
			input{
				width:100%;
				height:30px;
				border-radius: 3px;
				padding:0 15px 0 40px;
				background-color: #f5f5f5;
				color:#555;
				font-size:13px;
				box-sizing: border-box;
				line-height: 20px;
			}
			.back{
				width:40px;
				height:30px;
				text-align: text;
				line-height: 30px;
				font-size:14px;
				display: block;
			}
		}
		
	}
}
</style>
