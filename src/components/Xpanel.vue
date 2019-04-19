<template>
	<div class="weui-panel__bd">
		<a href="javascript:void(0);" v-for="(n,index) in news" class="weui-media-box weui-media-box_appmsg" :key="index">
			<div class="weui-media-box__hd">
				<img class="weui-media-box__thumb" :src="n.author.avatar_url" alt="">
			</div>
			<div class="weui-media-box__bd">
				<h4 class="weui-media-box__title" v-text="n.title"></h4>
				<p class="weui-media-box__desc" v-html="n.content"></p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			}
		},
		async created() {
			let {
				data
			} = await this.$axios.get('https://cnodejs.org/api/v1/topics', {
				params: {
					ID: 12345
				}
			});
			this.news = data.data;
		}
	}
</script>

<style>

</style>