# Vídeos hospedados com o portfólio

O player usa arquivos de public/videos. As capas ficam em public/capas. O cadastro dos trabalhos está em src/data/projects.ts. O site não usa player, links ou miniaturas do YouTube.

Para adicionar um trabalho:
1. Copie um MP4 para public/videos e uma imagem para public/capas.
2. Acrescente um item em src/data/projects.ts, seguindo o modelo existente e usando o nome exato dos arquivos.
3. Teste com npm run dev.
4. Gere a publicação com npm run build. Publique TODO o conteúdo de dist, incluindo videos e capas, na mesma hospedagem.

Não existe upload automático pelo navegador. Salvar os arquivos no projeto e publicar novamente faz os vídeos passarem a ser servidos pelo próprio endereço do site. As alterações locais ainda não atualizam o site público.

Os originais do Drive foram preservados na pasta de trabalho do Codex. As cópias do site usam MP4 H.264/AAC com início rápido e resolução reduzida para web. A única exceção autorizada entre os arquivos com ED é 1 BREAKING NEWS ED MICROLEAD.mp4.

Foram mantidos o nome O Jao e os contatos que já estavam no projeto. Os resultados numéricos e depoimentos do modelo foram removidos do visual novo.

A primeira seção inclui uma prévia silenciosa de 15 segundos, com pausa e botão para assistir ao vídeo completo com áudio. Em celulares o vídeo aparece antes do texto. A análise pública da referência com REA está documentada em REFERENCIA-REA.md.

Os arquivos completos do Mini VSL e do vídeo religioso têm aproximadamente 109 MB e 130 MB. A hospedagem deve aceitar esses tamanhos; se a publicação usar GitHub, confira os limites de arquivo e o suporte a arquivos grandes antes de enviar. Nada foi publicado automaticamente.


Atualização: marca Ojoaouai, tema preto com azul neon e copy para direct response. Foram incluídos seis vídeos da pasta AD do mesmo portfólio do Drive: Dynamic Type, News, UGC, Info, Neuropatia 1 e diabetes 3. O arquivo ed foi excluído da seleção. Os vídeos continuam locais em public/videos; nenhum player externo é necessário.


Reprodução atual: todos os vídeos tocam no próprio card, incluindo o destaque. Assistir com som troca a prévia pelo vídeo completo no mesmo espaço. Os controles de volume e progresso ficam no próprio vídeo. Ao iniciar outro player, o anterior é pausado. Não há janela ampliada nem modal.


Seleção atual: Mini VSL, AD Dynamic Type e AD Neuropatia retirados, incluindo seus vídeos e capas da pasta publicada. Mini VSL substituído por Breaking News · ED Microlead na categoria VSL. Os demais arquivos ED continuam excluídos. Os arquivos retirados foram preservados apenas em backup fora do site.

Idiomas: seletor EN · PT · ES no topo, nessa ordem. A interface inicia em português quando não há escolha salva e lembra a preferência neste navegador. As traduções ficam em src/i18n.tsx. A troca traduz os textos da interface e preserva os mesmos arquivos de vídeo e o filtro selecionado.

GitHub: public/videos/religioso.mp4 é versionado com Git LFS. Após clonar, use git lfs pull para obter o vídeo completo. Em projetos Vercel, habilite Git LFS em Settings > Git e publique novamente para que o arquivo completo seja incluído (https://vercel.com/docs/project-configuration/git-settings).
