<template>
	<div class="weui-search-bar" :class="{'weui-search-bar_focusing':bool}" id="searchBar">
		<form class="weui-search-bar__form">
			<div class="weui-search-bar__box">
				<i class="weui-icon-search"></i>
				<input v-model="searchInput" type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" @blur="toggle" required="">
				<a @click="clear" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
			</div>
			<label class="weui-search-bar__label" @click="toggle" id="searchText">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
		</form>
		<a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="toggle">取消</a>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				bool:false,
				searchInput:""
			}
		},
		methods:{
			toggle(){
				this.bool = !this.bool
			},
			clear(){
				this.searchInput = "";
			}
		},
		directives:{
			focus(el){
				el.focus();
			}
		}
	}
</script>
