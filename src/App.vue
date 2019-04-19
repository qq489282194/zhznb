<template>
	<div id="app">
		<Xheader />
		<Xsearch />
		<Xpanel />
		<Xfooter />
	</div>
</template>

<script>
	//	头部
	import Xheader from './components/Xheader.vue'

	//搜索
	import Xsearch from './components/Xsearch.vue'
	
	//	内容
	import Xpanel from './components/Xpanel.vue'
	
	//	底部
	import Xfooter from './components/Xfooter.vue'

	export default {
		name: 'app',
		components: {
			Xheader,
			Xsearch,
			Xpanel,
			Xfooter
		}
	}
</script>