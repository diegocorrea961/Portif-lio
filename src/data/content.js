export const content = {
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', skills: 'Habilidades', projects: 'Projetos', education: 'Formação', contact: 'Contato' },
    role: 'Estudante de Engenharia de Software · Full-stack · SAP EWM (ABAP)',
    typed: ['Estudante de Engenharia de Software', 'Desenvolvimento Full-stack', 'React e JavaScript', 'SAP EWM (ABAP)'],
    about: {
      title: 'Sobre mim',
      text: 'Tenho 21 anos e estou à procura de uma oportunidade na área de programação. Estudante de Engenharia de Software com experiência prática em desenvolvimento full-stack e SAP EWM (ABAP), atuando em ambientes profissionais reais. Me destaco pela dedicação e determinação, colaborando de forma comprometida para entregar resultados.',
      cta: 'Entrar em contato',
    },
    experience: {
      title: 'Experiência profissional',
      items: [
        { role: 'Estagiário em Desenvolvimento de Software', company: 'WPS Consult', period: '10/2025 – 08/2026', bullets: ['Atuei como desenvolvedor de software com ABAP no módulo SAP EWM.'] },
        { role: 'Trainee', company: 'Villela Brasil Bank', period: '10/2024 – 05/2025', bullets: [
          'Desenvolvimento de interfaces de usuário intuitivas com frameworks modernos, melhorando a experiência do usuário final.',
          'Depuração de erros em sites, analisando o código-fonte para identificar e corrigir problemas.',
          'Manutenção e atualização de sistemas, corrigindo falhas que comprometiam o funcionamento dos sites.',
          'Criação de scripts de automação para otimizar processos repetitivos, economizando tempo e recursos da equipe.',
        ] },
        { role: 'Estagiário no Suporte de TI', company: 'Villela Brasil Bank', period: '02/2024 – 08/2024', bullets: [] },
        { role: 'Estagiário', company: 'Foro Central II e I', period: '01/2022 – 12/2023', bullets: ['Excelente trabalho em equipe.'] },
      ],
    },
    skills: {
      title: 'Habilidades',
      tech: 'Técnicas',
      // Nível: 1 = básico, 2 = conhecimento, 3 = experiência profissional (ajuste à vontade)
      techItems: [
        { name: 'ABAP (SAP EWM)', level: 3 }, { name: 'JavaScript', level: 2 }, { name: 'React.js', level: 2 },
        { name: 'GitHub', level: 2 }, { name: 'Java', level: 1 }, { name: 'Python', level: 1 },
      ],
      levels: ['Básico', 'Conhecimento', 'Profissional'],
      soft: 'Comportamentais',
      softItems: ['Habilidades interpessoais', 'Proatividade', 'Iniciativa para aprender', 'Adaptação a novas tecnologias', 'Comprometimento com qualidade', 'Trabalho em equipe'],
      languages: 'Idiomas',
      langItems: ['Português: língua materna', 'Inglês: intermediário (B1)'],
    },
    projects: {
      title: 'Projetos',
      soon: 'Novos projetos em breve.',
      soonText: 'Estou trabalhando em projetos que serão publicados aqui. Enquanto isso, confira meu GitHub.',
      repo: 'Código', demo: 'Demo',
    },
    education: {
      title: 'Formação acadêmica',
      items: [
        { title: 'Engenharia de Software', place: 'PUCRS · Porto Alegre, RS', period: '02/2024 – atual', status: 'Cursando o 4º semestre' },
        { title: 'Ensino Médio', place: 'Escola de Ensino Médio Vinícius de Morais · Porto Alegre, RS', period: '02/2012 – 12/2023', status: 'Concluído' },
      ],
    },
    contact: {
      title: 'Contato', text: 'Vamos conversar? Envie uma mensagem ou me encontre nas redes.',
      name: 'Nome', email: 'Seu e-mail', message: 'Mensagem', send: 'Enviar mensagem',
      sending: 'Enviando...', ok: 'Mensagem enviada! Obrigado pelo contato.', error: 'Não foi possível enviar. Tente pelo e-mail.',
      fallback: 'Enviar por e-mail',
    },
    footer: 'Todos os direitos reservados.',
  },
  en: {
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact' },
    role: 'Software Engineering student · Full-stack · SAP EWM (ABAP)',
    typed: ['Software Engineering student', 'Full-stack development', 'React and JavaScript', 'SAP EWM (ABAP)'],
    about: {
      title: 'About me',
      text: "I'm 21 and looking for an opportunity in programming. I'm a Software Engineering student with hands-on experience in full-stack development and SAP EWM (ABAP), working in real professional environments. I stand out for my dedication and determination, collaborating with commitment to deliver results.",
      cta: 'Get in touch',
    },
    experience: {
      title: 'Professional experience',
      items: [
        { role: 'Software Development Intern', company: 'WPS Consult', period: '10/2025 – 08/2026', bullets: ['Worked as a software developer using ABAP within the SAP EWM module.'] },
        { role: 'Trainee', company: 'Villela Brasil Bank', period: '10/2024 – 05/2025', bullets: [
          'Developed intuitive user interfaces with modern frameworks, improving the end-user experience.',
          'Debugged website errors by analyzing source code to identify and fix issues.',
          'Maintained and updated systems, fixing bugs that could compromise site functionality.',
          'Created automation scripts to optimize repetitive processes, saving the team time and resources.',
        ] },
        { role: 'IT Support Intern', company: 'Villela Brasil Bank', period: '02/2024 – 08/2024', bullets: [] },
        { role: 'Intern', company: 'Foro Central II e I', period: '01/2022 – 12/2023', bullets: ['Excellent teamwork.'] },
      ],
    },
    skills: {
      title: 'Skills',
      tech: 'Technical',
      // Level: 1 = basic, 2 = working knowledge, 3 = professional experience (adjust freely)
      techItems: [
        { name: 'ABAP (SAP EWM)', level: 3 }, { name: 'JavaScript', level: 2 }, { name: 'React.js', level: 2 },
        { name: 'GitHub', level: 2 }, { name: 'Java', level: 1 }, { name: 'Python', level: 1 },
      ],
      levels: ['Basic', 'Knowledge', 'Professional'],
      soft: 'Soft skills',
      softItems: ['Interpersonal skills', 'Proactivity', 'Initiative to learn', 'Adaptability to new technologies', 'Commitment to quality', 'Teamwork'],
      languages: 'Languages',
      langItems: ['Portuguese: native', 'English: intermediate (B1)'],
    },
    projects: {
      title: 'Projects',
      soon: 'New projects coming soon.',
      soonText: "I'm working on projects that will be published here. In the meantime, check out my GitHub.",
      repo: 'Code', demo: 'Demo',
    },
    education: {
      title: 'Education',
      items: [
        { title: 'Software Engineering', place: 'PUCRS · Porto Alegre, RS, Brazil', period: '02/2024 – present', status: 'Currently in the 4th semester' },
        { title: 'High School', place: 'Escola de Ensino Médio Vinícius de Morais · Porto Alegre, RS, Brazil', period: '02/2012 – 12/2023', status: 'Completed' },
      ],
    },
    contact: {
      title: 'Contact', text: "Let's talk! Send a message or find me on social media.",
      name: 'Name', email: 'Your email', message: 'Message', send: 'Send message',
      sending: 'Sending...', ok: 'Message sent! Thanks for reaching out.', error: 'Could not send. Please try email instead.',
      fallback: 'Send by email',
    },
    footer: 'All rights reserved.',
  },
}
