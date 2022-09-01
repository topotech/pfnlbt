import React from "react";
import { IonApp } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* i18n */
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { ja } from "make-plural/plurals";
// import { messages as messagesEn } from './locales/en/messages';
import { messages as messagesJa } from "./locales/ja/messages";

import AppRouter from "./components/AppRouter";

i18n.load("ja", messagesJa);
i18n.loadLocaleData("ja", { plurals: ja });
i18n.activate("ja");

const App: React.FC = () => (
  <IonApp>
    <I18nProvider i18n={i18n}>
      <AppRouter />
    </I18nProvider>
  </IonApp>
);

export default App;
