<script>
	
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "components/niceui/min.css";
	@import "components/niceui/icon.css";
	
 
	.nui_card{
		padding: 13px;
		margin: 13px;
		 
		    background-color: #fff;
			border-radius: 12px;
			.nui_card_ad{
					border-radius: 12px;
					overflow: hidden;
			}
	}
	 
</style>