<template>
  <v-app class="signature">
    <v-content fill-height>
      <!--<div class="signature__header">
        <financas-logo class="logo" /><span>- Assinatura de e-mail</span>
      </div>-->
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 md4 pa-2>
            <v-card class="elevation-1">
              <v-card-text>
                <v-form>
                  <v-text-field
                    ref="start"
                    tabindex="1"
                    v-model="name"
                    label="Nome"
                    autocomplete="new-name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    ref="start"
                    tabindex="1"
                    v-model="email"
                    :rules="[rules.email]"
                    label="E-mail"
                    autocomplete="new-email"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    tabindex="2"
                    v-model="title"
                    label="Função"
                    autocomplete="new-title"
                    type="text"
                  ></v-text-field>
                  <!--<v-text-field
                    tabindex="3"
                    v-model="address"
                    label="Endereço"
                    autocomplete="new-address"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    tabindex="4"
                    v-model="website"
                    label="Website"
                    autocomplete="new-site"
                    type="text"
                  ></v-text-field>-->
                  <v-text-field
                    tabindex="5"
                    v-model="phone1"
                    label="Telefone #1"
                    autocomplete="new-phone1"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    tabindex="6"
                    v-model="phone2"
                    label="Telefone #2"
                    autocomplete="new-phone2"
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex">
                <v-btn
                  ref="copy"
                  class="js-copy"
                  color="primary"
                  @click.native.prevent
                  data-clipboard-target="#source"
                >
                  Copiar
                </v-btn>
                <v-btn color="secondary" ref="copySrc" class="js-copy-src">
                  Copiar HTML
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 md8 pa-2>
            <v-card class="elevation-1" height="100%">
              <div class="signature__source">
                <div ref="sourceWrapper">
                  <table
                    id="source"
                    cellpadding="0"
                    cellspacing="0"
                    style="font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;"
                  >
                    <tbody>
                      <tr>
                        <td><br><br></td>
                      </tr>
                      <tr>
                        <td valign="top">
                          <a tabindex="-1" target="_blank" href="https://www.financas360.com.br/">
                            <img alt="Logo - finanças 360" title="Logo - finanças 360" border="0" src="https://i.imgur.com/0nr54h6.png" style="width: 120px;margin-top: 0;margin-right:10px;">
                          </a>
                        </td>
                        <td padding="0" style="font-family: arial,sans-serif;">
                          <table border="0" style="font-family:Helvetica, Arial, sans-serif;font-size:12px;font-weight:normal;color:#37474f;text-align:left;line-height:20px;">
                            <tbody>
                              <tr>
                                <td style="font: normal 100% Arial,Helvetica,sans-serif">
                                  <span style="font-weight: bold; font-size: 13px; color: #404756;">{{name}}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="font: normal 100% Arial,Helvetica,sans-serif">
                                  <span style="color: #9a9a9a;">{{title}}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style="font: normal 100% Arial,Helvetica,sans-serif">
                                  <a tabindex="-1" :href="tel1" style="color: #9a9a9a;">
                                    {{ phone1 || "+55 (11) 2091-6178" }}
                                  </a>&nbsp;
                                  <span v-if="phone2" style="color:#999;">|&nbsp;</span>
                                  <a tabindex="-1" :href="tel2" style="color: #9a9a9a;">{{ phone2 }}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="text-decoration: none; display: grid;font: normal 100% Arial,Helvetica,sans-serif">
                                  <a style="color: #2f79c5;text-decoration: none;" v-bind:href="'mailto:'+(email)">{{ email}}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="text-decoration: none; display: grid;font: normal 100% Arial,Helvetica,sans-serif">
                                  <a style="color: #2f79c5;text-decoration: none;" target="_blank" href="https://www.financas360.com.br">https://www.financas360.com.br</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="font: normal 100% Arial,Helvetica,sans-serif">
                                  <hr style="margin: 8px 0;">
                                </td>
                              </tr>
                              <tr>
                                <td style="font: normal 100% Arial,Helvetica,sans-serif">
                                  <a target="_blank" href="https://www.linkedin.com/company/finan%C3%A7as-360/">
                                    <img style="width:20px;" src="https://i.imgur.com/AzWbcNp.png" alt="Linkedin">
                                  </a>&nbsp;
                                  <a target="_blank" href="https://pt-br.facebook.com/financas360/">
                                    <img style="width:20px;" src="https://i.imgur.com/otRrhlh.png" alt="Facebook">
                                  </a>&nbsp;
                                  <a target="_blank" href="https://blog.financas360.com.br/">
                                    <img style="width:20px;" src="https://i.imgur.com/0Gkzkwv.png" alt="Blog">
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 md6 pa-2>
            <span style="margin:2px 5px;">Vá em configuraçãoes.</span>
            <v-card class="elevation-1 signature__step">
              <img src="@/assets/ex1.gif" />
            </v-card>
          </v-flex>
          <v-flex xs12 md6 pa-2>
            <span style="margin:2px 5px;">Cole e ative sua assinatura.</span>
            <v-card class="elevation-1 signature__step">
              <img src="@/assets/ex2.gif" />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar :timeout="1000" v-model="feedback" color="success">
      Copiado!
    </v-snackbar>
  </v-app>
</template>
<script>
import Clipboard from "clipboard";
export default {
  data: () => ({
    feedback: false,
    name: "",
    title: "",
    email: "",
    address: "",
    website: "https://www.financas360.com.br/",
    phone1: "+55 (11) 2091-6178",
    phone2: "",
    rules: {
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'E-mail inválido.'
      }
    }
  }),
  computed: {
    tel1() {
      return `tel:${this.phone1.replace(/ /g, "").replace(/\D/g, "")}`;
    },
    tel2() {
      return `tel:${this.phone2.replace(/ /g, "").replace(/\D/g, "")}`;
    }
  },
  mounted() {
    this.$refs.start.focus();

    const signatureClipboard = new Clipboard(".js-copy");

    const signatureHTMLClipboard = new Clipboard(".js-copy-src", {
      text: () => {
        return this.$refs.sourceWrapper.innerHTML;
      }
    });

    signatureClipboard.on("success", () => {
      this.feedback = true;
    });
    signatureHTMLClipboard.on("success", () => {
      this.feedback = true;
    });
  },
  props: {
    source: String
  }
};
</script>
<style lang="scss">
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
    border: 2px dashed $secondary;
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
</style>
