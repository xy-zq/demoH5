<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style lang="scss">
	body {
		padding: 0;
		margin: 0;
		background-color: #fff;
	}

	.FontColorError {
		color: #ff5d5d;
	}

	.FontColorSuccess {
		color: #00d064;
	}

	.FontColorNormal {
		color: #4f4f4f;
	}

	.FontColorInfo {
		color: #909090;
	}

	.FontColorOther {
		color: #02A7F0;
	}

	.FontColorWarn {
		color: #fa9a23;
	}

	.bwhite {
		background-color: #fff;
	}

	.mt20 {
		margin-top: 20px;
	}

	.mb20 {
		margin-bottom: 20px;
	}

	.ml20 {
		margin-left: 20px;
	}

	.mr20 {
		margin-right: 20px;
	}

	.mt10 {
		margin-top: 10px;
	}

	.mb10 {
		margin-bottom: 10px;
	}

	.ml10 {
		margin-left: 10px;
	}

	.mr10 {
		margin-right: 10px;
	}

	.pt20 {
		padding-top: 20px;
	}

	.pb20 {
		padding-bottom: 20px;
	}

	.pl20 {
		padding-left: 20px;
	}

	.pr20 {
		padding-right: 20px;
	}

	.pt15 {
		padding-top: 15px;
	}

	.pb15 {
		padding-bottom: 15px;
	}

	.pl15 {
		padding-left: 15px;
	}

	.pr15 {
		padding-right: 15px;
	}

	.fb {
		font-weight: bold;
	}

	.fz10 {
		font-size: 10px;
	}

	.fz11 {
		font-size: 11px;
	}

	.fz12 {
		font-size: 12px;
	}

	.fz13 {
		font-size: 13px;
	}

	.fz14 {
		font-size: 14px;
	}

	.fz15 {
		font-size: 15px;
	}

	.fz16 {
		font-size: 16px;
	}

	.df {
		display: flex;
	}

	.jfc {
		justify-content: center;
	}

	.jfsa {
		justify-content: space-around;
	}

	.jfsb {
		justify-content: space-between;
	}

	.aic {
		align-items: center;
	}

	.flex1 {
		flex: 1;
	}

	.OPoint {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.van-cell__value {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.van-toast.van-toast--middle.van-toast--success {
		color: #00d064;
		width: 50%;
	}

	.van-toast.van-toast--middle.van-toast--fail {
		color: #55ffff;
		width: 50%;
	}

	.van-overlay {
		z-index: 999 !important;
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
