import * as config from './config';

export function getBoss() {
  window.gapi.load("client", initClient);
};

export function initClient() {
  console.log(config.apiKey);
  window.gapi.client
    .init({
      apiKey: config.apiKey,
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
      loadBoss();
  })
}

export let loadBoss = () => {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "'Main'!A2:C49"
      })
      .then(
        response => {
          const data = response.result.values;
          console.log(data)
          return data.map(boss => ({
            name: boss[0],
            image: boss[1],
            description: boss[2]
          })) || [];
        },
      );
  });
}
