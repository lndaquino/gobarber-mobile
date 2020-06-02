import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.12:3333',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com dispositivo fisico: IP da máquina
 * Android com emulador: localhost - com o adb pode redirecionar a porta localhost do node pro localhost do emulador (adb reverse tcp:3333 tcp:3333)
 * Android com emulador: pode usar um IP específico do emulador 10.0.2.2 (Android Studio)
 * Android com emulador: pode usar o 10.0.3.2
 *
 * Android com dispositivo fisco: IP da máquina
 * const api = axios.create({
 * baseURL: 'http://192.168.15.12:3333', // pega do IP config (endereço IPv4 do adaptador de rede sem fio) - se for pelo emulador é http://localhost:3333
});
 */
