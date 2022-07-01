<template>
  <a-row
    :gutter="[8,8]"
    class="container"
  >
    <a-typography-title type="secondary">Arquivos F360</a-typography-title>
    <a-col class="time-cs">
      <div></div>
      <template
        class="time-cs-fotos"
        v-for="logo in logos"
        :key="logo.value"
      >
        <a-card
          :title="logo.text"
          :bordered="false"
          class="cards"
        >
          <div><img
              :src="logo.value"
              width="80"
            /></div>
          <div>
            <a-button
              @click="showModal(logo)"
              :disabled="logo.value === defaultAvatar"
              type="primary"
              danger
            >Excluir</a-button>
          </div>
        </a-card>
      </template>
    </a-col>
    <a-col class="logos">
      <template
        v-for="foto in fotos"
        :key="foto.value"
      >
        <a-card
          :title="foto.text"
          :bordered="false"
          class="cards"
        >
          <div><img
              :src="foto.value"
              width="80"
            /></div>
          <div>
            <a-button
              @click="showModal(foto)"
              type="primary"
              danger
            >Excluir</a-button>
          </div>
        </a-card>
      </template>
      <a-modal
        v-model:visible="visibleModal"
        title="Excluir Arquivo"
        @ok="handleDelete(currentFile.value)"
      >
        <p>Tem certeza que quer excluir {{currentFile.text}}?</p>
      </a-modal>
    </a-col>
  </a-row>
</template>

<script>
import { firebase } from '../useFirebase';
import { ref, onMounted } from 'vue';
import { message } from 'ant-design-vue';
export default {
  setup () {
    const currentFile = ref(null);
    const logos = ref([]);
    const fotos = ref([]);
    const visibleModal = ref(false);

    const { handleListFotosCs, handleListLogos, defaultAvatar, handleDeleteFile } = firebase;

    const loadFiles = () => {
      handleListFotosCs(logos.value);
      handleListLogos(fotos.value);
    };
    onMounted(async () => {
      try {
        await loadFiles();
      } catch (error) {
        console.log(error);
      }

    });
    const showModal = (file) => {
      currentFile.value = file;
      visibleModal.value = true;
    };
    const handleDelete = async (url) => {
      try {
        logos.value = logos.value.filter(f => f.value !== url);
        fotos.value = fotos.value.filter(f => f.value !== url);

        await handleDeleteFile(url);
      } catch (error) {
        console.log(error)
        message.error('Houve um erro!');
      }
      visibleModal.value = false;
    };

    return { showModal, visibleModal, logos, fotos, defaultAvatar, handleDeleteFile, currentFile, handleDelete }
  }
}
</script>

<style scoped lang="scss">
.container {
  background: #ffffff;
  box-shadow: 5px 5px 5px -3px #00000020;
  border-radius: 4px;
  min-height: 500px;
  display: flex;
  justify-content: center;
}
.loading {
  height: 70vh;
  width: 100wv;
  display: grid;
  place-items: center;
}
.cards {
  max-width: 300px;
  border: 1px solid #00000020;
  box-shadow: 5px 5px 5px -3px #00000020;
  padding: 8px;
  margin: 8px;
  text-align: center;
  min-height: 162px;
  img {
    margin: 8px;
  }
}
.time-cs,
.logos {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.loadingSpin{
  height: 100%;
  display: grid;
  place-items: center;
}
</style>