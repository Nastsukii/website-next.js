import Layout from '../components/layout/Layout'
import PageSection from '../components/ui/PageSection'
import { getMainMenu, getBusinessSettings } from '../lib/settings'

export default function Historia({ businessSettings, mainMenu }) {
  return (
    <Layout
      title="História"
      description="A jornada de Vivieli Comiran: sensibilidade humana, integração de saberes e missão de cura."
      businessSettings={businessSettings}
      mainMenu={mainMenu}
    >
      <PageSection
        bgColor="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800"
        vPadding="py-20"
        title="História de Vivieli Comiran"
        subtitle="Da sensibilidade humana à missão de guiar pessoas em processos de cura e expansão"
      >
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Vivieli Comiran nasceu em 04 de outubro de 1977. Desde muito jovem, reconheceu uma conexão natural
            com a sensibilidade humana. Essa habilidade intuitiva, somada ao interesse genuíno por compreender
            sentimentos, comportamentos e relações, a conduziu inicialmente ao desenvolvimento de pessoas.
          </p>
          <p>
            Formou-se em Gestão de Recursos Humanos, adquirindo uma base sólida sobre comportamento humano,
            liderança e processos internos de transformação. Apesar de uma carreira estruturada, sentia um chamado
            maior — algo que transcendia técnicas corporativas e se conectava diretamente com a alma humana.
          </p>
          <p>
            A busca por significado, propósito e cura a guiou para um novo ciclo de estudos, aprofundamento e
            autodescoberta. Dessa jornada interna nasceu sua verdadeira missão. Em 2022, iniciou seus atendimentos
            como Terapeuta Integrativa, dedicando-se a unir ciência, espiritualidade, energia e emoção para ajudar
            pessoas em seus processos de cura e expansão.
          </p>
          <p>
            Ao longo de sua trajetória, Vivieli conquistou formações que se tornaram pilares de seu trabalho:
            Psicologia Transgenerativa, Hipnose Regressiva e PNL, integrando Neurociência e Epigenética; Apometria
            Regressiva; Constelação Transgenerativa; Reiki Tradicional (Níveis 1 e 2); 7 Safiras e Comandos
            Quânticos; Desenvolvimento Humano através da Inteligência Espiritual; Reconstrução do Eu; Barras de
            Access; Creso Midas; e pós-graduação em Neurociência.
          </p>
          <p>
            Hoje, Vivieli atua com uma visão ampla, compassiva e profundamente humana. Seu trabalho integra
            conhecimento técnico, sensibilidade espiritual e presença acolhedora. Em cada atendimento, oferece um
            espaço seguro para que a pessoa se reencontre consigo mesma, reconheça suas dores, compreenda seus
            padrões, liberte o que não faz parte de sua verdade e desperte sua própria força interior.
          </p>
          <p>
            Sua missão é clara e verdadeira: guiar pessoas no caminho da cura, da consciência, da liberdade
            emocional e da expansão da alma.
          </p>
        </div>
      </PageSection>
    </Layout>
  )
}

export async function getStaticProps() {
  const businessSettings = getBusinessSettings()
  const mainMenu = getMainMenu()

  return {
    props: {
      businessSettings,
      mainMenu,
    },
  }
}