<template>
<div id="main-container">
 <a-row>
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="bg-container main-container-options">
          <label>
            Nome:
            <a-input ref="start" v-model:value="assinatura.nome" placeholder="Nome" />
          </label>
          <label>
            Função:
            <a-input v-model:value="assinatura.funcao" placeholder="Função" />
          </label>
          <label>
            Telefone #1
            <a-input v-mask="'+55 (##) ####-####'" v-model:value="assinatura.foneUm" placeholder="Telefone #1" />
          </label>
          <label>
            Telefone #2
            <a-input v-mask="'+55 (##) ####-####'" v-model:value="assinatura.foneDois" placeholder="Telefone #2" />
          </label>
          <label style="width: 100%">
            Logo:
            <a-select style="width: 100%" placeholder="Logo" ref="logoSelect" v-model:value="logoSelected">
              <template v-for="logo in assinatura.logos" :key="logo.value">
                  <a-select-option :value="logo.value">
                    <a-spin v-if="isLoading" size="small" />{{logo.text}}
                  </a-select-option>
              </template>
            </a-select>
          </label>
          <label v-show="csUpload" style="width: 100%">
            Fotos:
            <a-select style="width: 100%" placeholder="Foto" ref="FotoSelect" v-model:value="urlFoto">
              <template v-for="foto in fotosCs " :key="foto.value">
                  <a-select-option :value="foto.value">
                    <a-spin v-if="isLoading" size="small" />{{foto.text}}
                  </a-select-option>
              </template>
            </a-select>
          </label>
          <label style="width: 100%">
            Selecione o Layout:
            <a-select style="width: 100%" placeholder="Layout" ref="selectLayout" v-model:value="layoutSelected">
            <template v-for="l in assinatura.layout" :key="l.text">
              <a-select-option :value="l.value">{{l.text}}</a-select-option>
             </template> 
            </a-select>
          </label>
          <fieldset class="main-container-upload">
            <legend>Upload {{csUpload ? 'Foto': ''}}</legend>
            <label>
              Nome do {{csUpload ? 'Foto': 'Logo'}}:
              <a-input v-model:value="nomeLogo" :placeholder="`${csUpload ? 'Nome da Foto': 'Nome do Logo'}`" />
            </label>
            <label>
              <a-upload :multiple="false" :customRequest="handleUploadLogo" v-model:file-list="file"  name="file">
                <a-button :disabled="!nomeLogo">
                    <upload-outlined></upload-outlined>
                      Carregar um {{csUpload ? 'Foto': 'Logo'}}:
                </a-button>
              </a-upload>
            </label>
          </fieldset>
          <div class="main-container-btns">
              <a-button class="js-copy" data-clipboard-target="#source" large type="primary">Copiar</a-button>
              <a-button class="js-copy-src" data-clipboard-target="#source" large type="dashed">Copiar HTML</a-button>
          </div>
      </div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
      <div class="bg-container main-container-assinatura">
          <div class="signature__source">
                <div ref="sourceWrapper">
                  <table
                    ref="source"
                    id="source"
                    cellpadding="0"
                    cellspacing="0"
                    class="tf360"
                    v-if="layoutSelected == 'padrao'"
                  >
                    <tr>
                      <th class="tf360-style" style="font-size: 14px;">
                        {{ assinatura.nome }} <br />
                        <span
                          style="font-weight: 600; font-size: 11px; padding-bottom: 50px; color: #404756;"
                          >{{ assinatura.funcao }}</span
                        >
                      </th>
                      <th
                        style="background:url(https://user-images.githubusercontent.com/7879993/75486230-de68f200-598a-11ea-979a-85c884ea3983.png) bottom right no-repeat; background-position: center; height: 92px;"
                        class="tf360-style"
                        rowspan="4"
                      ></th>
                      <th
                        style="padding-left: 20px"
                        class="tf360-style"
                        rowspan="4"
                      >
                        <img :src="logoSelected" alt="Logo F360°" width="120" />
                      </th>
                    </tr>
                    <tr valign="bottom">
                      <td style="color:#616161;">
                        <img
                          src="https://user-images.githubusercontent.com/7879993/75485599-c04ec200-5989-11ea-9d9d-6d5a516f93f5.png"
                          width="16"
                          alt="Telefone"
                        />{{ assinatura.foneUm || "+55 (11) 2091-6178" }} <br />
                      </td>
                    </tr>
                    <tr v-if="assinatura.foneDois" valign="bottom">
                      <td style="color:#616161;">
                        <img
                          src="https://user-images.githubusercontent.com/7879993/75485599-c04ec200-5989-11ea-9d9d-6d5a516f93f5.png"
                          width="16"
                          alt="Telefone"
                        />{{ assinatura.foneDois }} <br />
                      </td>
                    </tr>
                    <tr valign="top">
                      <td style="color:#616161;">
                        <img
                          src="https://user-images.githubusercontent.com/7879993/75485604-c17fef00-5989-11ea-8fe9-1557363f1e45.png"
                          width="16"
                          alt="Site"
                        />
                        www.f360.com.br
                      </td>
                    </tr>
                  </table>

                  <table
                    id="source"
                    ref="source"
                    class="f360Snt"
                    v-if="layoutSelected !== 'padrao'"
                  >
                    <tbody>
                      <tr class="sntWrap">
                        <td class="sntImg">
                          <img :src="urlFoto"/>
                        </td>
                        <td class="sntContent">
                          <div class="sntIntro">
                            <span class="sntName">{{ assinatura.nome }}</span> <br />
                            <span class="sntFnct">{{ assinatura.funcao }}</span>
                          </div>

                          <div class="sntContact">
                            <img
                              style="width:12px"
                              src="https://user-images.githubusercontent.com/7879993/86842456-9914a980-c07b-11ea-9c43-0a56a01090f8.png"
                              alt="telefone"
                            />
                            <span>+55 (11) 2091-6198</span>
                          </div>
                          <div class="sntContact">
                            <img
                              style="width:12px"
                              src="https://user-images.githubusercontent.com/7879993/86842591-ce20fc00-c07b-11ea-84fe-ed4ca383a993.png"
                              alt="email"
                            />
                            <span>www.f360.com.br</span>
                          </div>

                          <div>
                            <img
                              width="80"
                              :src="logoSelected"
                              alt="Logo f360"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
          </div>
      </div>
    </a-col>
  </a-row>
  <a-row class="instrucoes">
    <a-col class="instrucoes-info">
      <span style="margin:2px 5px;">Vá em configuraçãoes.</span>
      <img :src="require(`@/assets/ex1.gif`)" />
    </a-col>
    <a-col class="instrucoes-info">
      <span style="margin:2px 5px;">Cole e ative sua assinatura.</span>
      <img :src="require(`@/assets/ex2.gif`)" />
    </a-col>
  </a-row>
</div>
</template>

<script>
import Clipboard from 'clipboard';
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import { ref, onMounted, computed, watch } from 'vue';
import { firebase  } from '../useFirebase';

export default {
  name: 'App',
  components: { UploadOutlined },
  setup(){
    const { defaultAvatar, storage, storageRef, uploadBytes, handleListFotosCs, handleListLogos, isLoading} = firebase;
    const start = ref();
    const source = ref();
    const file = ref(null);
    const nomeLogo = ref('');
    const fotosCs = ref([]);
    const urlFoto = ref(defaultAvatar);
    const layoutSelected = ref('padrao');
    const csUpload = computed(() => layoutSelected.value === 'cs');
    const logoSelected = ref('https://user-images.githubusercontent.com/7879993/83878094-fc748a00-a711-11ea-833c-98bcc1019cbf.png');
    const assinatura = ref({
      foneUm:'+55 (11) 2091-6178',
      foneDois:'+55 (11) 2091-6178',
      nome:'',
      funcao:'',
      layout: [
      {text: "Layout padrão",value: "padrao"},
      {text: "Layout CS",value: "cs"}
      ],
      logos: [
      {
        text: "Logo f360",
        value:
          "https://user-images.githubusercontent.com/7879993/83878094-fc748a00-a711-11ea-833c-98bcc1019cbf.png"
      },
      {
        text: "Logo Contábil",
        value:
          "https://user-images.githubusercontent.com/7879993/83878098-fd0d2080-a711-11ea-94ca-3b25d366bc2a.png"
      }
    ],
    });
    
    const getStorageName = (value) => {
      return csUpload.value ? 
      storageRef(storage, `cs/${nomeLogo.value}--${value.file.uid}`)
      :storageRef(storage, `${nomeLogo.value || 'Upload'}--${value.file.uid}`);
    };
    const setCurrentLogo = (response) => {
      const { fullPath, bucket } = response.metadata;
      if(!csUpload.value){
         logoSelected.value = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${fullPath}?alt=media`;
              assinatura.value.logos.push({ 
              text: !nomeLogo.value 
                ? `${assinatura.value.logos.length + 1} - Upload` 
                : nomeLogo.value,
              value: logoSelected.value
        });
        return;
      }
      const formatFullPatch = fullPath.replace('/', '%2F');
      urlFoto.value = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${formatFullPatch}?alt=media`;
              fotosCs.value.push({ 
              text: !nomeLogo.value 
                ? `${fotosCs.value.length + 1} - Upload` 
                : nomeLogo.value,
              value: urlFoto.value
        });
    };
    const handleUploadLogo = (value) => {
      const storageLogos = getStorageName(value)
      uploadBytes(storageLogos, value.file).then((response) => {
        setCurrentLogo(response);
        file.value = null;
        message.success('Arquivo salvo com sucesso!');
      });
    }
    
    watch(layoutSelected,() => { 
      nomeLogo.value = '';
    });

     onMounted(() => {
      handleListLogos(assinatura.value.logos);
      handleListFotosCs(fotosCs.value);

      const signatureClipboard  = new Clipboard('.js-copy');
      const signatureClipboardSrc  = new Clipboard('.js-copy-src',{
         text:() => {
            return source.value.outerHTML;
          }
      });
      const heandleMessage = (action) => {
       const ishtml = !action ? 'HTML' : '';
       message.success(`${ishtml} Copiado para área de transferência!`);
      };
     
      signatureClipboard.on('success', () => {
        heandleMessage('Copiar');
      });
      signatureClipboardSrc.on('success',() => {
        heandleMessage('');
      });

     start.value.focus();
    });

    return {assinatura, layoutSelected, logoSelected, start, source, handleUploadLogo, file, isLoading, nomeLogo, csUpload, fotosCs, urlFoto }
  }
}
</script>

<style lang="scss">
#app{
 background: #f1f1f1;
 height: 100%;
 padding: 24px;
 min-height: 700px;
 margin: 0;
}

$primary: #779ec3;
$copy: #2a3844;
$secondary: #779ec3;
$third: #665ef1;
$purple: $third;
$blue: $primary;
$black: $copy;
html {
  height: 100%;
  box-sizing: border-box;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
}
body {
  margin: 0;
  padding: 0;
  background: #fafafa;
  color: $copy;
}
.signature {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  &__header {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-end;
    margin-top: 40px;
    span {
      color: $copy;
      font-family: "Open Sans";
      font-weight: 600;
      margin-left: 1rem;
    }
    svg {
      width: calc(508px / 4);
      height: calc(314px / 4);
    }
  }
  .logo {
    margin-bottom: -27px;
  }
  &__source {
    overflow: hidden;
    height: 100%;
    display: flex;
    position: relative;
    > div {
      margin: auto;
      min-width: 400px;
    }
  }
  &__step {
    display: flex;
    img {
      width: 100%;
      height: auto;
      margin: auto;
      padding: 4px 4px 0;
    }
  }
}
.tf360 {
  border-collapse: collapse;
  border-spacing: 0;
  padding-top: 20px;
}
.tf360 td {
  font-family: Tahoma, sans-serif;
  font-size: 11px;
  padding: 0 9px 0 0;
  overflow: hidden;
  word-break: normal;
  font-weight: 500;
}
.tf360 th {
  font-family: Tahoma, sans-serif;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  word-break: normal;
}
.tf360 .tf360-style {
  text-align: left;
  padding-right: 20px;
}
img {
  margin-right: 10px;
}
.foto {
  padding-left: 10px;
}
i.v-icon.material-icons {
  display: none;
}
/* email Laout cs */
.f360Snt {
  font-family: "Roboto Slab", serif;
  width: 470px;
}
.f360Snt .sntWrap {
  width: 100%;
}
.sntContent {
  margin-left: 75px;
}
.sntImg {
  width: 140px;
}
.sntImg img {
  width: 110px;
}
.sntContact {
  margin-bottom: 5px;
}
.sntContact svg {
  width: 40px;
  margin-right: 15px;
  margin-bottom: -10px;
}
.sntContact span {
  font-size: 10px;
  color: #212e47;
  font-weight: 300;
  letter-spacing: 1px;
}
.sntIntro {
  margin-bottom: 12px;
}
.sntName {
  font-size: 15px;
  color: #00adee;
  font-weight: 800;
  letter-spacing: 1px;
}
.sntFnct {
  font-size: 14px;
  color: #212e47;
  font-weight: 300;
  letter-spacing: 0px;
}
.sntLogo {
  margin-top: 10px;
}

#main-container{
  max-width: 980px;
  margin: 0 auto;
  gap: 16px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.bg-container{
   background: #ffffff;
   border-radius: 4px;
}
.main-container-options{
  overflow: hidden;
  max-width: 350px;
  box-shadow: 5px 5px 5px -3px #00000020;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.main-container-btns{
  display: flex;
  width: 100%;
  gap:8px;
  margin-top: 8px;
}
.main-container-btns button{
width: 100%;
}

.main-container-options label{
  width: 100%;
  color: #4e4e4e;
}
.main-container-assinatura{
 display: grid;
 place-items: center;
 min-height: 100%;
 width: 580px;
 padding: 8px;
 border: 2px dashed #779ec3;;
}
.main-container-upload{
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  background: #f9f9f9;
  max-width: 300px;
  overflow: hidden;
  legend{
      font-size: 12px;
      color: $primary;
  }
}
.instrucoes{
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
.instrucoes-info{
   display: flex;
   flex-direction: column;
   background: #f1f1f1;
   margin: 2px;
   padding: 2px;
   span{
    color: $primary;
    font-weight: bold;
   }
}
@media(max-width:800px){
  .main-container-assinatura{
    max-width: 300px;
    display: flex;
  }
  .instrucoes-info{
    img{
      max-width: 300px;
    }
  }
}

</style>
