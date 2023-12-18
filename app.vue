<template>
	<NuxtLayout 
		:style="{
			'overflow': !!bodyModal ? 'hidden' : 'auto',
			'height': !!bodyModal ? '100vh' : 'auto'
		}">
		<NuxtPage/>
	</NuxtLayout>
	<UiModal/>
</template>
<style>
html {
	scroll-behavior: smooth;
}
</style>
<script setup lang="ts">
	const bodyModal = useBodyModal()

	const user = useSupabaseUser()
	const sub = useSub()

	try {
		if (user.value) sub.value = await $fetch('/api/getInfoSub/', {
			method: 'POST',
			body: JSON.stringify({
				uuid: user.value?.id ?? '',
				type: user.value?.user_metadata.type ?? ''
			})
		})
	} catch (error) {
		console.log(error)
	}
</script>