import React from 'react';
import './StoryTimeline.scss';

const StoryTimeline = () => {
    const storyData = [
        {
            year: '2018 - 2020',
            title: 'Início da Jornada na Programação',
            description: 'Durante este período, dei meus primeiros passos no mundo da programação, aprendendo JavaScript, HTML e CSS. Passei horas praticando e desenvolvendo pequenos projetos para solidificar meu entendimento dos fundamentos da web.',
            logo: 'javascript.png',
        },
        {
            year: '2020',
            title: 'Primeiros Projetos Freelance',
            description: 'Com a base que adquiri em JavaScript, HTML e CSS, comecei a realizar meus primeiros trabalhos como freelancer em parceria. Desenvolvi sites para clientes locais, o que me ajudou a melhorar minhas habilidades e a ganhar experiência prática no mercado.',
            logo: 'mysoftwareweb_logo.jfif',
        },
        {
            year: '2021 - 2022',
            title: 'Desenvolvedor na RW3 Tecnologia',
            description: 'Entrei na faculdade de Análise e Desenvolvimento de Sistemas e consegui um trabalho na RW3 Tecnologia. onde trabalhei em projetos governamentais. Colaborei com uma equipe para desenvolver soluções que atendiam às necessidades de órgãos públicos, proporcionando impacto positivo na administração pública e na vida dos cidadãos.',
            logo: '/rw3_tecnologia_logo.jfif',
        },
        {
            year: '2022 - 2023',
            title: 'Desenvolvedor na Zak',
            description: 'Trabalhei na Zak, uma plataforma inovadora que transforma o gerenciamento de restaurantes. Fui responsável por desenvolver soluções tecnológicas que ajudaram a otimizar a experiência e tornar os restaurantes mais eficientes. A experiência foi fundamental para aprimorar minhas habilidades em resolver problemas complexos usando tecnologia.',
            logo: 'zakpay_logo.jfif',
        },
        {
            year: '2023 - 2024',
            title: 'Desenvolvedor Independente',
            "description": "Após sofrer um layoff, comecei a procurar maneiras de ganhar dinheiro de forma independente. Busquei apoio em pessoas próximas e iniciei a programar soluções, atividade que continuo realizando até hoje.",
            logo: ''
        },
        {
          year: 'Futuro',
          title: 'Próximos Desafios',
          description: 'Estou focado em expandir meus conhecimentos, explorar novas tecnologias e buscar oportunidades que me desafiem ainda mais como desenvolvedor. O futuro é uma página em branco, pronta para ser preenchida com novas conquistas e experiências.',
          logo: ''
        }
    ];
    

  return (
    <section className="timeline-container">
      <h2>Minha Jornada</h2>
      <div className="timeline">
        {storyData.reverse().map((story, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <img className="company-logo" src={story.logo} alt={`${story.title} logo`} />
              <div className="timeline-text">
                <h3>{story.year}</h3>
                <h4>{story.title}</h4>
                <p>{story.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StoryTimeline;
