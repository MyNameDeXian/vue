<template>
	<div class="formModel flex-row-aic">
		<slot></slot>
		<p class="star">{{ star === false ? '' : '*'}}</p>
	</div>
</template>

<script>
	export default {
		props:["star"],
	}
</script>

