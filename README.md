
# Boas vindas ao repositório do projeto Calculator Paint

O app ajuda o usuário a calcular a quantidade de tinta necessária para pintar suas paredes. Com base na quantidade necessária o sistema deve aponta os tamanhos das latas de tinta que o usuário deve comprar.


## Regras de uso

- Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 50 metros quadrados.
- O total de área das portas e janelas deve ser no máximo 50% da área de parede.
- Caso sua parede tenha porta, sua parede deve ter no minimo 2.20m de altura.
- O botão para cálculo só será desabilitado caso todos os campos sejam preenchidos.
- O botão ficará desabilitado se as condições não sejam atentidas.
## Instalação

Veja oprojeto com yarn ou npm

- Clone o repositório em uma pasta local
```git clone```
- Entre na pasta do projeto
```cd calculator-paint```
- Instale as dependências
```yarn install```
- Execute a aplicação
```yarn dev```

Você pode executar o projeto com o docker!

- Clone o projeto
- Entre na pasta do projeto
- Faça o build da aplicação com o docker
```docker build -t fioravante/calculatepaint . ```
- Coloque o app no servidor local com o docker
```docker run -p 3000:3000 -d fioravante/calculatepaint```

- Para rodar os testes
```yarn test```
ou
```yarn test:watch```
