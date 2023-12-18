<template>
	 <div style="display: flex; position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 10; background-color: #000000; --bg-opacity: 0.4; color: #6B7280; justify-content: center; align-items: center;">
		<div class="content" style="height: 95%;">
			<slot/>
		</div>
	</div>
</template>
<script setup>
</script>
<style scoped>
.content{
	overflow: auto; 
	padding: 1.5rem; 
	margin-left: 2.5rem;
	margin-right: 2.5rem; 
	background-color: #ffffff; 
	border-radius: 0.75rem; 
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); 
	width: 100%;
}
</style>