import Thumbnail from "../components/Thumbnail"
const Results = ({results}) => {
   
    // user go to website,make req to page,on server we build the page,and we send over required data all over as a prop,(user get full page)=>server side rendering
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center '>
           {results.map((result)=>(
               <Thumbnail 
               key={result.id}
               result={result}
               />
           ))} 
        </div>
    )
}

export default Results
