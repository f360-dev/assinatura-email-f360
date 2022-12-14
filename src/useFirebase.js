import { ref } from "vue";
import { message } from "ant-design-vue";
import {
  deleteObject,
  getStorage,
  uploadBytes,
  listAll,
  ref as storageRef,
} from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBI9jtYLZbYkeQqmHLn6MOqrJcRiVchZAg",
  authDomain: "assinatura-email-f360.firebaseapp.com",
  projectId: "assinatura-email-f360",
  storageBucket: "assinatura-email-f360.appspot.com",
  messagingSenderId: "201906170698",
  appId: "1:201906170698:web:88446e250283e23f33afb3",
};

initializeApp(firebaseConfig);

const defaultAvatar =
  "https://firebasestorage.googleapis.com/v0/b/assinatura-email-f360.appspot.com/o/cs%2Fdeafult.png?alt=media";
const storage = getStorage();
const isLoading = ref(false);

const handleSetDefaultLogo = (arrayLogos, logoSelected) => {
  const defaultLogo = arrayLogos.find((logo) => logo.text === "F360");
  if (defaultLogo) {
    const logoUrl = JSON.parse(JSON.stringify(defaultLogo));
    logoSelected.value = logoUrl.value;
  }
};
const handleListLogos = (arrayLogos, logoSelected) => {
  const allLogos = storageRef(storage);
  listAll(allLogos)
    .then((res) => {
      if (!res.items) return;
      res.items.forEach((logo, index) => {
        const { bucket, fullPath } = logo;
        const [nomeArquivo] = fullPath.split("--");
        const url = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${fullPath}?alt=media`;
        arrayLogos.push({
          text:
            nomeArquivo === "Upload"
              ? `${index} - ${nomeArquivo}`
              : nomeArquivo,
          value: url,
        });

        handleSetDefaultLogo(arrayLogos, logoSelected);
      });
    })
    .finally(() => {
      isLoading.value = false;
    });
};
const handleListFotosCs = (arrayFotos) => {
  const allFotos = storageRef(storage, "cs");
  listAll(allFotos).then((res) => {
    res.items.forEach((logo) => {
      const { bucket, fullPath } = logo;
      const formatFullPatch = fullPath.replace("/", "%2F");
      const [nomeArquivo] = fullPath.split("--");

      const url = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${formatFullPatch}?alt=media`;
      arrayFotos.push({
        text: url === defaultAvatar ? `Padrão` : nomeArquivo,
        value: url,
      });
    });
  });
};
const replaceRefHelper = (rawRef) => {
  let ref;
  const step1 = rawRef.replace(/%2F/gm, "/");
  const step2 = step1.replace(/\?alt=media/gm, "");
  ref = step2;
  return ref;
};

const handleDeleteFile = (url) => {
  const array = url.split("/");
  const rawRef = array[array.length - 1];
  const fileRef = replaceRefHelper(rawRef);
  const desertRef = storageRef(storage, fileRef);
  // Delete the file
  deleteObject(desertRef).then(() => {
    message.info("A Imagem foi Deletada");
  });
};

export const firebase = {
  defaultAvatar,
  storage,
  uploadBytes,
  listAll,
  storageRef,
  handleListFotosCs,
  handleListLogos,
  isLoading,
  handleDeleteFile,
  replaceRefHelper,
};
