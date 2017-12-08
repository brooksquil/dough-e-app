import React from 'react';
import { Get } from 'react-axios'


const products = [];
//GET request
class AllProducts extends React.Component {
  render() {
    return(
      <div>
        <Get url="http://localhost:3001/products.json" >
          {(error, response, isLoading, onReload) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (<div>{response.data.message} <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }
}

export default AllProducts;