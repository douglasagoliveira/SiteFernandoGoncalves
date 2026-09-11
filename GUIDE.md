# Guia de Edição via Terminal

Este guia ajuda a navegar e editar o projeto via terminal.

## 📂 Navegação Rápida

```bash
# Ir para pasta raiz do projeto
cd /caminho/para/projeto

# Ver estrutura de pastas
tree src -L 2

# Listar arquivos TypeScript
find src -name "*.tsx" -o -name "*.ts"

# Listar arquivos CSS
find src -name "*.css"
```

## 📝 Editando Conteúdo

### Editar textos do site
Todo o conteúdo está em `src/data/content.ts`:

```bash
# Abrir arquivo de conteúdo
nano src/data/content.ts
# ou
code src/data/content.ts
```

### Editar estilos CSS
```bash
# Estilos base (reset, tipografia)
nano src/styles/base.css

# Estilos de componentes
nano src/styles/components.css

# Responsividade
nano src/styles/responsive.css
```

### Editar páginas específicas
```bash
# Página inicial
nano src/pages/Home.tsx

# Página Sobre
nano src/pages/Sobre.tsx

# Página Palestras
nano src/pages/Palestras.tsx

# Página Contato
nano src/pages/Contato.tsx
```

## 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificar tipos TypeScript
npx tsc --noEmit
```

## 📦 Estrutura de Componentes

### Componentes UI (src/components/ui/)
- `Button` - Botões primários e secundários
- `Card` - Cards reutilizáveis
- `Section` - Seções com padding
- `Container` - Container com largura máxima
- `SectionHeader` - Cabeçalho de seção
- `ImagePlaceholder` - Placeholder de imagem

### Componentes de Seção (src/components/sections/)
- `HeroSection` - Hero com título e CTAs
- `StatsSection` - Números de credibilidade
- `PainPointsSection` - Pontos de dor
- `AboutSummarySection` - Resumo sobre
- `MethodSection` - Metodologia
- `ModulesSection` - Módulos das palestras
- `StepsSection` - Passos (como funciona)
- `BenefitsSection` - Benefícios
- `FormatsSection` - Formatos disponíveis
- `TestimonialsSection` - Depoimentos
- `BooksSection` - Livros publicados
- `FAQSection` - Perguntas frequentes
- `UrgencySection` - Urgência
- `FinalCtaSection` - CTA final

### Componentes de Layout (src/components/layout/)
- `Header` - Cabeçalho com navegação
- `Footer` - Rodapé
- `Breadcrumb` - Navegação hierárquica

## 🎨 Editando Cores (Fase Futura)

Quando for adicionar cores, edite:

```bash
# Variáveis CSS (a criar)
nano src/styles/variables.css

# Ou diretamente nos componentes
nano src/styles/components.css
```

## 📱 Testando Responsividade

```bash
# Rodar em modo desenvolvimento
npm run dev

# Abrir no navegador e usar DevTools
# F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

## 🔍 Buscando Conteúdo

```bash
# Buscar texto em todos os arquivos
grep -r "texto" src/

# Buscar em arquivos TypeScript
grep -r "texto" src/ --include="*.ts" --include="*.tsx"

# Buscar em CSS
grep -r "texto" src/ --include="*.css"
```

## 📊 Verificando Tamanho dos Arquivos

```bash
# Ver tamanho de todos os arquivos
find src -type f -exec wc -l {} + | sort -n

# Ver apenas arquivos TypeScript
find src -name "*.tsx" -o -name "*.ts" | xargs wc -l | sort -n
```

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Os arquivos estarão em dist/
# Faça upload para o servidor
```

## 💡 Dicas

1. **Edite o conteúdo em `src/data/content.ts`** - Não edite textos diretamente nas páginas
2. **Use componentes reutilizáveis** - Mantenha consistência visual
3. **Teste responsividade** - Verifique em diferentes tamanhos de tela
4. **Mantenha o wireframe** - Não adicione cores até aprovação do cliente
5. **Commit frequente** - Faça commits após cada mudança significativa

## 📞 Suporte

Para dúvidas sobre a estrutura:
- Veja o README.md principal
- Consulte a documentação em cada arquivo
- Verifique os tipos em `src/types/index.ts`
