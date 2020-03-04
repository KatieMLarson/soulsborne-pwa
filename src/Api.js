import * as config from './config';

export const getBoss =  () => {
  window.gapi.load("client", initClient);
};

const initClient = () => {
  window.gapi.client
    .init({
      apiKey: config.apiKey,
      discoveryDocs: config.discoveryDocs
    })
    .then( () => {
      loadBoss();
      console.log("Two")
  })
}

const loadBoss = () => {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "'Main'!A2:C49"
      })
      .then(response => {
          const boss = selectBoss(response.result.values);
          console.log(boss + "hello")
          return boss || [];
        },
      );
  });
}

const selectBoss = (bossArray) => {
  return bossArray[Math.floor(Math.random() * bossArray.length)];
}
