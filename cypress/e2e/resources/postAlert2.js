const QUEUE_NAME = 'alarm-response';
const { publishMessage } = require('./message_sender');
const { alarmObjMessage } = require('./objects_gen');
const { DateTime, Settings } = require('luxon');

const defaultZoneName = 'America/Sao_Paulo';
Settings.defaultZoneName = defaultZoneName;
async function main() {
  try {
    const date = DateTime.now();
    const currentDate = date.toFormat("yyyy-MM-dd'T'HH:mm:ssZZ");

    const alertas = await alarmObjMessage("212260001", currentDate, 1, 1, 2);

    if (Array.isArray(alertas)) {
      for (const alarm_object of alertas) {
        try {
          publishMessage( {
            alarms: [
              {
                type: 2,
                dateTime: currentDate,
                latitude: -6.422131,
                longitude: -49.954813,
                speed: 31.0,
                urlMovie: 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grkocmhf7oyf/b/JimiObjects/o/EVENT_862798050671540_00000000_2023_05_23_12_42_32_12.mp4',
                urlPicture: 'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grkocmhf7oyf/b/JimiObjects/o/EVENT_862798050671540_00000000_2023_05_23_12_42_32_12.png',
              },
            ],
            device: {
              deviceId: '212260001'
            }
          }, QUEUE_NAME);
          console.log(`\nALERTA PARA O IMEI ${imei} PUBLICADO EM QA`);
        } catch (error) {
        }
      }
    } else {
      console.error('Erro ao obter alertas. Verifique se a função alarmObjMessage está retornando um array.');
    }

  } catch (error) {
    console.error(error);
  }
}

main();


