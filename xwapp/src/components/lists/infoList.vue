<template>
	<div class="infoList">
		<div class="flex-row-aic border-b">
			<p class="title">
				<slot></slot> :
			</p>
			<div class="info flex-1 flex-row-end">
				<slot name="info"></slot>
			</div>
		</div>		
	</div>
</template>

