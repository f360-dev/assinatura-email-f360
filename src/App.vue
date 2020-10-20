<template>
  <v-app class="signature">
    <v-content fill-height>
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
                    tabindex="2"
                    v-model="title"
                    label="Função"
                    autocomplete="new-title"
                    type="text"
                  ></v-text-field>
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
                <v-select
                  v-model="logoSelected"
                  :items="logos"
                  label="Logos"
                  dense
                ></v-select>
                <v-select
                  v-model="layoutSelected"
                  :items="layout"
                  label="Layout"
                  dense
                ></v-select>
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
            <!-- AREA DE COPIAR -->
            <v-card class="elevation-1" height="100%">
              <div class="signature__source">
                <div ref="sourceWrapper">
                  <table
                    id="source"
                    cellpadding="0"
                    cellspacing="0"
                    class="tf360"
                    v-if="layoutSelected == 'padrao'"
                  >
                    <tr>
                      <th class="tf360-style" style="font-size: 14px;">
                        {{ name }} <br />
                        <span
                          style="font-weight: 600; font-size: 11px; padding-bottom: 50px; color: #404756;"
                          >{{ title }}</span
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
                        <img :src="logoSelected" alt="Logo F360°" />
                      </th>
                    </tr>
                    <tr valign="bottom">
                      <td style="color:#616161;">
                        <img
                          src="https://user-images.githubusercontent.com/7879993/75485599-c04ec200-5989-11ea-9d9d-6d5a516f93f5.png"
                          width="16"
                          alt="Telefone"
                        />{{ phone1 || "+55 (11) 2091-6178" }} <br />
                      </td>
                    </tr>
                    <tr v-if="phone2" valign="bottom">
                      <td style="color:#616161;">
                        <img
                          src="https://user-images.githubusercontent.com/7879993/75485599-c04ec200-5989-11ea-9d9d-6d5a516f93f5.png"
                          width="16"
                          alt="Telefone"
                        />{{ phone2 }} <br />
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
                    class="f360Snt"
                    v-if="layoutSelected !== 'padrao'"
                  >
                    <tbody>
                      <tr class="sntWrap">
                        <td class="sntImg">
                          <img
                            v-show="/Julia/.test(name)"
                            src="https://user-images.githubusercontent.com/7879993/86842848-248e3a80-c07c-11ea-8b80-5df2aaf2b589.png"
                          />
                          <img
                            v-show="/Ana/.test(name)"
                            src="https://user-images.githubusercontent.com/7879993/86842841-235d0d80-c07c-11ea-9d7a-ab4c85e9db7d.png"
                          />
                          <img
                            v-show="/Cássia/.test(name)"
                            src="https://user-images.githubusercontent.com/7879993/86842846-248e3a80-c07c-11ea-87b7-a86d5659a254.png"
                          />
                          <img
                            v-show="/Camilly/.test(name)"
                            src="https://user-images.githubusercontent.com/7879993/96573465-8fb6f200-12a4-11eb-9790-79d92155e362.png"
                          />
                        </td>
                        <td class="sntContent">
                          <div class="sntIntro">
                            <span class="sntName">{{ name }}</span> <br />
                            <span class="sntFnct">{{ title }}</span>
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

                          <div class="sntLogo">
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
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail inválido.";
      }
    },
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
    layout: [
      {
        text: "Layout padrão",
        value: "padrao"
      },
      {
        text: "Layout CS",
        value: "cs"
      }
    ],
    layoutSelected: "padrao",
    logoSelected:
      "https://user-images.githubusercontent.com/7879993/83878094-fc748a00-a711-11ea-833c-98bcc1019cbf.png"
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
</style>
