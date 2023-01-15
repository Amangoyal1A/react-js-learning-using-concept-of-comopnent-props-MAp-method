import Card from './Card'
import movies from './Sdata'

const getH1Styles = () => {
    return {
      textAlign: 'center',
      fontSize: '2em',
      fontWeight: 'bold',
      margin: '1em 0',
      color: '#333',
      fontFamily: 'Montserrat, sans-serif'
    }
  }
  
  //using map method
  function App() {
    return (
        <>
            {movies.map((movie) => (
                <Card
                  key={movie.name}
                  head={movie.name}
                  info={movie.description}
                  link={movie.wikipediaLink}
                  imagelink={movie.imageLink}
                />
            ))}
        </>
    )
}
// function App() {
//     return (
//         <>
//         <h1 style={getH1Styles()}>Top Movies and their wikipedia Link</h1>
//             <Card  
//             head={movies[0].name} 
//             info={movies[0].description}
//             link={movies[0].wikipediaLink}
//             imagelink={movies[0].imageLink}
//             />
          
//             <Card  
//             head={movies[1].name} 
//             info={movies[1].description}
//             link={movies[1].wikipediaLink}
//             imagelink={movies[1].imageLink}
//             />    
//             <Card  
//             head={movies[2].name} 
//             info={movies[2].description}
//             link={movies[2].wikipediaLink}
//             imagelink={movies[2].imageLink}
//             />    
//             <Card  
//             head={movies[3].name} 
//             info={movies[3].description}
//             link={movies[3].wikipediaLink}
//             imagelink={movies[3].imageLink}
//             />    
//             <Card  
//             head={movies[4].name} 
//             info={movies[4].description}
//             link={movies[4].wikipediaLink}
//             imagelink={movies[4].imageLink}
//             />
//         </>
//     )
// }

//using Map method




 export default App;