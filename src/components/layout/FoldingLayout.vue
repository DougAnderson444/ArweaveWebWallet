<template>
	<div class="folding-layout">
		<div class="left no-scrollbar" :class="{ hasRight: hasRight() }">
			<slot name="left" />
		</div>
		<div class="right">
			<slot name="right" />
		</div>
	</div>
</template>



<script>
import InterfaceStore from '@/store/InterfaceStore'
import { onUnmounted, toRef, watch } from 'vue'

export default {
	setup () {
		const verticalContent = toRef(InterfaceStore.breakpoints, 'verticalContent')
		watch(() => verticalContent.value, (val) => val ? InterfaceStore.sticky = false : InterfaceStore.sticky = true, { immediate: true })

		onUnmounted(() => InterfaceStore.sticky = false)
		return { verticalContent }
	},
	methods: {
		hasLeft () { return !!this.$slots.left },
		hasRight () { return !!this.$slots.right },
	},
}
</script>



<style scoped>
.folding-layout {
	width: 100%;
	position: relative;
	display: flex;
}

.verticalContent .folding-layout {
	flex-direction: column;
}

.left {
	overflow: auto;
	height: var(--current-vh);
	min-width: 0;
	position: sticky;
	top: 0;
}

.left.hasRight {
	width: 40vw;
	z-index: 1;
}

.verticalContent .left {
	position: relative;
	width: 100%;
	height: auto;
}

.right {
	width: 100%;
	min-width: 0;
	flex: 1 1 0;
}

.verticalContent .right {
	padding-inline-start: 0;
}
</style>