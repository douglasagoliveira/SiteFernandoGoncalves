# Site Fernando Gonçalves - Palestrante Motivacional

Site institucional para Fernando Gonçalves, storyteller e palestrante motivacional desde 1992.

## 🚀 Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **React Router** - Navegação
- **CSS Puro** - Estilização (wireframe sem cores)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumb.tsx
│   ├── sections/        # Seções reutilizáveis
│   │   └── index.tsx
│   └── ui/              # Componentes UI base
│       └── index.tsx
├── data/
│   └── content.ts       # Todo conteúdo do site
├── pages/               # Páginas do site
│   ├── Home.tsx
│   ├── Sobre.tsx
│   ├── Palestras.tsx
│   └── Contato.tsx
├── styles/              # CSS organizado
│   ├── base.css
│   ├── components.css
│   └── responsive.css
├── types/
│   └── index.ts         # Tipos TypeScript
├── App.tsx              # Componente raiz
├── main.tsx             # Entry point
└── index.css            # Import de estilos
```

## 🎯 Páginas

1. **Início** - Landing page com 15 dobras de copywriting
2. **Sobre** - Biografia, trajetória e diferenciais
3. **Palestras** - Método, módulos e formatos
4. **Contato** - Formulário e informações

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build produção
npm run build

# Preview build
npm run preview
```

## 📝 Estrutura de Copywriting

A página Início segue a estrutura profissional de 15 dobras:

1. **Hero** - Promessa principal
2. **Stats** - Números de credibilidade
3. **Pain Points** - Identificação com o problema
4. **About Summary** - Autoridade resumida
5. **Method** - Mecanismo único (SIMPLEX)
6. **Modules** - Demonstração dos 3 módulos
7. **Steps** - Como funciona (3 passos)
8. **Benefits** - Benefícios para empresas
9. **Formats** - Formatos disponíveis
10. **Testimonials** - Prova social
11. **Books** - Obras publicadas
12. **FAQ** - Objeções respondidas
13. **Urgency** - Motivo para agir agora
14. **Final CTA** - Chamada final para ação

## 🎨 Wireframe

Este é um wireframe de alta qualidade em escala de cinza, sem cores definidas, pronto para:
- Apresentação ao cliente
- Aprovação de estrutura e conteúdo
- Próxima fase: definição de cores, tipografia e imagens reais

## 📞 Contato

- **WhatsApp:** (31) 99847-5453
- **Email:** contato@fernandosimplex.com.br
- **Localização:** Belo Horizonte, MG

## 📚 Conteúdo

Todo o conteúdo textual está centralizado em `src/data/content.ts` para fácil edição e manutenção.
