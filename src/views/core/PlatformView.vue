<template>
  <TheHeader :account="rewardNFTStore.currentAccount" />
  <div class="container">
    <CertificateCard />
    <div class="container-content">
      <h1>#Web2.5 Akademija 2024</h1>
      <p>
        Congratulations for attending Moonstruck's Web2.5 academy, <br />
        you are now eligible to claim your token.
      </p>
      <BaseButton
        v-if="!rewardNFTStore.currentAccount"
        @click="rewardNFTStore.connectWallet"
        >Connect your wallet
        <img
          src="../../assets/images/MetaMask_Fox.svg.png"
          id="metamask-logo"
          alt="metamask-logo"
        />
      </BaseButton>
      <BaseButton
        @click="rewardNFTStore.claimNFT"
        v-else
        >Claim your NFT</BaseButton
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useRewardNFTStore } from "@/stores/rewardNFT";

import CertificateCard from "@/components/CertificateCard.vue";
import TheHeader from "@/components/TheHeader.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

const rewardNFTStore = useRewardNFTStore();

onMounted(() => {
  rewardNFTStore.checkConnectedWalletExist();
});
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: url("../../assets/images/background1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container-content {
  background-color: white;
  color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
}

#metamask-logo {
  width: 24px;
  height: 24px;
  margin-left: 8px;
}

@media only screen and (max-width: 980px) {
  .container {
    grid-template-columns: 1fr;
    height: 50vh;
  }

  .container-content {
    height: 50vh;
  }

  .wrapper {
    height: 50vh;
  }

  .card {
    width: 100px;
  }
}
</style>
