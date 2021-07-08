![Next.js](../img/nextjs.png)
[<img src="../img/nestjs.svg" width="72"/>](Nest.js)

# Imersão Full Stack & FullCycle 3.0 - Desafio 2

## Informações do desafio

Nesse desafio você trabalhará com backend e frontend juntos para consolidar os conhecimentos adquiridos nas aulas de Nest.js e React.js.

**Para isso**:
- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos
- A aplicação Nest.js precisa rodar na porta 3000
- Aplicação React.js precisa rodar na porta 3001.
- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes.
- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: title - título da rota, startPosition - contém latitude e longitude, endPosition - contém latitude e longitude

## Rodar a aplicação

### Configurar /etc/hosts

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu /etc/hosts (para Windows o caminho é C:\Windows\system32\drivers\etc\hosts):
```
127.0.0.1 host.docker.internal
```
Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.

Execute os comandos:

```
docker-compose up
```

Acessar http://localhost:3001.

### Para Windows 

Lembrar de instalar o WSL2 e Docker. Vejo o vídeo: [https://www.youtube.com/watch?v=j6ioaes03oY](https://www.youtube.com/watch?v=j6ioaes03oY) 

Siga o guia rápido de instalação: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart) 