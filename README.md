# pass.in

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [ ] o organizador deve poder cadastrar um novo evento;
- [ ] o organizador deve poder visualizar dados de um evento;
- [ ] o organizador deve poder visualizar a lista de participantes;
- [ ] o participante deve poder se inscrever em um evento;
- [ ] o participante deve poder visualizar seu crachá de inscrição;
- [ ] o participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ] o participante só pode se inscrever em um evento uma única vez;
- [ ] o participante só pode se inscrever em eventos com vagas disponíveis;
- [ ] o participante só pode realizar check-in em um evento um única vez;

### Requisitos não-funcionais

- [ ] O check-in no evento será realizado através de um QRCode;
