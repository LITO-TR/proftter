const publication = [
  {
    id: '0',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDw_1UuRAaOuZuTerLn1PrgjuT1yKTUk2hQ&usqp=CAU',
    username: 'wongmjane',
    name: 'Daniel de la Cruz',
    description: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
    
    (gzipped size went from 16.6 KB down to 2.7 KB!!)
    
    * Chrome 79+, Safari 14+, Firefox 68+`,
    video: 'https://youtu.be/ymvYySd_P2E'
  },
  {
    id: '1',
    avatar:
        'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000',
    username: 'midudev',
    name: 'Jean Garcia Rojas',
    description: 'Wow, devter está funcionando y vivo 🦉',
    video: 'https://www.youtube.com/watch?v=zAlqcL100HM'
  },
  {
    id: '2',
    username: 'd4nidev',
    name: 'Ana Rodriguez',
    avatar: 'https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg',
    description: `Abro paraguas Paraguas
    
    Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
    video: 'https://youtu.be/7h2ryr_uUEs'
  }
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(publication))
}
