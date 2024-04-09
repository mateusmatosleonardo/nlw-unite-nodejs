# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [x] o organizador deve poder cadastrar um novo evento;
- [x] o organizador deve poder visualizar dados de um evento;
- [x] o organizador deve poder visualizar a lista de participantes;
- [x] o participante deve poder se inscrever em um evento;
- [x] o participante deve poder visualizar seu crachá de inscrição;
- [x] o participante deve poder realizar check-in no evento;

### Regras de negócio

- [x] o participante só pode se inscrever em um evento uma única vez;
- [x] o participante só pode se inscrever em eventos com vagas disponíveis;
- [x] o participante só pode realizar check-in em um evento um única vez;

### Requisitos não-funcionais

- [x] O check-in no evento será realizado através de um QRCode;

### Diagrama - db
![Captura de tela de 2024-04-05 23-56-12](https://github.com/mateusmatosleonardo/nlw-unite-nodejs/assets/73812069/c7a41b75-c56c-4765-96bf-dbe81a442a19)
