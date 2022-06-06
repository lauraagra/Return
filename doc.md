## Fluxo SPA

# SSR

- wordpress
- ruby & rails (github), magento...
- dois atores dentro da aplicação
- o back + from e o browser (usuário)

# SPA

- AngularJS, Vue, React, Svelte, Aurelia...
- back, front e usuario separados
- quando insere a url o back chama o front através de um arquivo JSON

## O que é o Vite

- ferramenta que permite que o browser entenda o React na sua ultima versão
- npm create vite@latest
- ele cria os arquivos
- apagar os outros arquivo e suas importações dentro do app.tsx e main.tsx
- deixar so app e mais.tsx e vite

## extensão .tsx

TS + JSX

TS

- JS com tipagem

JSX

- permite escrever código HTML dentro do JS (JS +XML)

## Conceitos React

- COMPONENTE:
  função que retorna HTML
- 1 letra maiuscula e mesmo nome do componente

-PROPRIEDADE:
igual o atributo em HTML
ex: <Button text="Enviar">

- ESTADO:
  uma variavel que o react fica observando e toda vez que altera o valor cria uma interface de novo com o novo valor

- className pra usar classes no HTML (porque o class é palavra reservada do JS)

## Tailwind

- uma ferramenta de utilitario css (classes) que adicionam estilos no html
- npm install -D tailwindcss
- npx tailwindcss init -p (-p com postcss)
- postcss observa os arquivos css
- utiliza o tailwind sempre com classes

## PRISMA

- framework para banco de dados
- escrever sql em JS

## SOLID

1. Single Responsibility Princibple
2. open/closed principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

1 - cada classe/função tem uma responsabilidade unica (faz mais de uma coisa)
2 - as classes da aplicação devem ser abertas para extensão, mas fechadas para modificação (a classe que extende não deve modificar a classe pai)
3 - devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando
//ex: Ave -> Gavião
4 - separar as interfaces implementadas o máximo possível
5 - inverter as dependencias da classe/função
