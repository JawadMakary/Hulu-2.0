import Thumbnail from "../components/Thumbnail"

const Results = ({results}) => {
   
    // user go to website,make req to page,on server we build the page,and we send over required data all over as a prop,(user get full page)=>server side rendering
    return (
        <div>
           {results.map((result)=>(
               <Thumbnail key={result.id}
               result={result}
               />
           ))} 
        </div>
    )
}

export default Results
