
// node.js file thats why i am using module.export
module.exports = {
  siteMetadata: {
    title:'Front-end Developer',
    author:'Lautaro Caceres'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve:'gatsby-source-filesystem',
      options:{
      	name: 'src',
      	path:`${__dirname}/src/`
    	}
    }
  ]
}
