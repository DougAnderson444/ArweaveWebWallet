<template>
	<div class="input input-box" :class="{ focus }">
		<Icon v-if="icon" :icon="icon" />
<!--		<input ref="input" class="text" v-model="model" :placeholder="placeholder" @focus="focus = true" @blur="focus = false" :disabled="disabled" :id="id" @animationstart="handleAutofill" @change="handleChange" />-->
		<RawInput class="text" v-model="model" :placeholder="placeholder" @focus="focus = true" @blur="focus = false" :disabled="disabled" :id="id" />
		<button v-for="action in actions" class="action" :key="action.icon" @click="action.run">
			<Icon :icon="action.icon" />
		</button>
	</div>
</template>



<script setup>
import Icon from '@/components/atomic/Icon.vue'
import RawInput from '@/components/function/RawInput.vue'
import { computed, onMounted, ref, watch } from 'vue'

const props = defineProps(['modelValue', 'icon', 'placeholder', 'actions', 'autocomplete', 'mask', 'disabled', 'id'])
const emit = defineEmits(['update:modelValue'])

const model = computed({
	get () { return props.modelValue },
	set (value) { emit('update:modelValue', value) }
})
const focus = ref(false)
watch(() => model.value, (newVal, oldVal) => {
	if (!props.mask) { return }
	if (!props.mask(newVal)) { model.value = oldVal }
})
</script>



<style scoped>
.input {
	height: 3.5em;
	display: flex;
	align-items: center;
	justify-content: center;
}

.icon {
	font-size: 1.4em;
	width: 2em;
	opacity: var(--element-secondary-opacity);
}

.focus .icon {
	opacity: 1;
}

.text {
	height: inherit;
	font-size: 1em;
	padding: 0 var(--spacing);
	outline: none;
	border: none;
	flex: 1 1 auto;
	background-color: transparent;
	color: var(--element-secondary);
	width: 100%;
}

.action {
	height: 100%;
	display: flex;
	align-items: center;
}
</style>