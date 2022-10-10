<template>
	<view>
		<view class="nui-wall bg-base">
		 
			<view class="wave">
				<view class="wave-a"></view>
				<view class="wave-b"></view>	 
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'nui-headbg',
	data() {
		return {};
	},
	props: {
		bgsrc: {
			type: String,
			default: ''
		}
	}
};
</script>

<style lang="scss">
.nui-wall {
	position: relative;
	height: 200px;
	width: 100%;

 
	position: relative;
	z-index: 0;
}
.nui-wallimage {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height:200px;
}

.wave {
	position: absolute;
	left: 0;
	bottom: -10px;
	height: 26px;
	width: 100%;
	z-index: 1;
}

.wave-a,
.wave-b,  {
	position: absolute;
	width: 100%;
	height: 26px;
}

.wave-a {
	background: url(http://demo.dzzsk.com/template/qu_app/touch/style/css/images/focus_a.svg) repeat-x;
	background-size: 450px;
	animation: ainuo_bgdwtop 3.5s infinite linear;
}

.wave-b {
	background: url(http://demo.dzzsk.com/template/qu_app/touch/style/css/images/focus_b.svg) repeat-x;
	top: 5px;
	background-size: 450px;
	animation: ainuo_bgdwbm 6s infinite linear;
}

 


@keyframes ainuo_bgdwtop {
	0% {
		background-position: 0 top;
	}

	100% {
		background-position: 450px top;
	}
}

@keyframes ainuo_bgdwbm {
	0% {
		background-position: 0 top;
	}

	100% {
		background-position: 450px top;
	}
}
</style>
