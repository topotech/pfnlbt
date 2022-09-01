import { IonContent, IonPage } from "@ionic/react";
import { i18n } from "@lingui/core";
import { defineMessage } from "@lingui/macro";
import React from "react";

import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

interface MyProps {
  title?: string;
}

const startScan = async () => {
  BarcodeScanner.hideBackground(); // make background of WebView transparent

  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  // if the result has content
  if (result.hasContent) {
    console.log(result.content); // log the raw scanned content
    alert(result.content);
  }
};

const MyPage: React.VFC<MyProps> = ({ title }: MyProps) => (
  <IonPage>
    <IonContent>
      {title}
      <button onClick={startScan}>Start scan</button>
    </IonContent>
  </IonPage>
);

const titleText = defineMessage({
  id: "test.title",
  message: "Default Title"
});

MyPage.defaultProps = {
  title: i18n._(titleText)
};

export default MyPage;
