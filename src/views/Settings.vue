<template>
	<div class="settings">
		<div class="column">
			<h2>Wallet Settings</h2>
			<div class="flex-column">
				<WalletOptions class="wallet-options" v-for="wallet in Wallets" :key="wallet.id" :wallet="wallet" />
				<Button v-if="!Wallets.length" style="font-size:1.5em; background:var(--background3);" @click="$router.push({ name: 'AddWallet' })" icon="+" />
			</div>
			<h2>App Settings</h2>
			<div class="group">
				<p>Gateway</p>
				<div class="flex-row">
					<Input v-model="gateway" :placeholder="ArweaveStore.gatewayURL" :icon="LogoArweave" style="flex:1 1 0;" @keyup.enter="gateway && setGateway()" />
					<Button @click="setGateway()">{{ gateway ? 'Submit' : 'Reset' }}</Button>
				</div>
			</div>
			<div class="group">
				<p>Currency</p>
				<Select v-model="currentSetting" :options="redstoneOptions" :icon="currency.symbol" />
			</div>
			<h2>Links</h2>
			<div class="group">
				<p v-if="isUser"><a href="https://discord.gg/W6VybRqwBP"><Icon :icon="LogoDiscord" style="vertical-align: text-top;" /> Discord</a> - Send feedback, questions or talk about anything</p>
				<p><a href="https://github.com/jfbeats/ArweaveWebWallet"><Icon :icon="LogoGithub" style="vertical-align: text-top;" /> ArweaveWebWallet</a> - Source code</p>
				<p><a href="https://jfbeats.github.io/ArweaveWalletConnector"><Icon :icon="LogoGithub" style="vertical-align: text-top;" /> ArweaveWalletConnector</a> - Integrate the universal connector to use web wallets like arweave.app inside your own applications</p>
			</div>
			<!-- <div class="group">
				<p>Fund the project</p>
				<InputAr v-model="amount" />
			</div>-->
		</div>
	</div>
</template>



<script setup>
import WalletOptions from '@/components/composed/WalletOptions.vue'
import Input from '@/components/atomic/Input.vue'
import Select from '@/components/atomic/Select.vue'
import Button from '@/components/atomic/Button.vue'
import { Wallets } from '@/functions/Wallets'
import ArweaveStore, { updateArweave, currency, redstoneOptions } from '@/store/ArweaveStore'
import { ref, computed } from 'vue'

import LogoArweave from '@/assets/logos/arweave.svg?component'
import LogoGithub from '@/assets/logos/socials/github.svg?component'
import LogoDiscord from '@/assets/logos/socials/discord.svg?component'
import Icon from '@/components/atomic/Icon.vue'

const gateway = ref('')
const setGateway = () => {
	// TODO test gateway url return if fail
	gateway.value ? updateArweave(gateway.value) : updateArweave()
	localStorage.setItem('gateway', gateway.value)
	gateway.value = ''
}

const currentSetting = computed({
	get () { return { currency: currency.settings.currency, provider: currency.settings.provider } },
	set (value) {
		currency.settings.currency = value.currency
		currency.settings.provider = value.provider
	}
})

const isUser = computed(() => Wallets.value.length)

const amount = ref('')
</script>



<style scoped>
.settings {
	padding: var(--spacing);
	min-height: var(--current-vh);
	width: 100%;
	display: flex;
	justify-content: center;
	background: var(--background2);
}

.column {
	width: 100%;
	max-width: var(--column-width);
}

.group {
	margin-bottom: 3em;
}

.wallet-options {
	border-radius: var(--border-radius);
}

a {
	text-decoration: none;
}
</style>