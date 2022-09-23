import React from 'react'
import { useSelector } from 'react-redux'


function Error() {

    const errores = useSelector(state => state.countries)
    
    
    return (
        <div>
            {
                errores?.map((e) => {
                    return (
                        <div key={e.id}>
                            <p>{e.error}</p>
                        </div>
                    )
                })
            }
        </div>
      )
    }
    
    export default Error