import { useCounter,useFetch} from "../hooks";
import { LoadingQuote,Quote } from "../03-examples";



export const Layout = () => {

  const  {increment,counter} = useCounter(1);

  const {data,isLoading,hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author,quote} = !!data && data[0];

  // if(isLoading){
  //   return(
  //     <h1>Loading...</h1>
  //   )
  // }

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          (isLoading)
           ? <LoadingQuote/>
           :<Quote  quote={quote} author={author }/>
        }


        <button 
          className="btn btn-primary"
          disabled={isLoading}
          onClick={()=>increment()}
        >
            
          Next Quote
        </button>

        
        


    </>
  )
}
