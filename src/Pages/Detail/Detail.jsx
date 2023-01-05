import React from 'react'
import CommonDetailSection from '../../Components/CommonDetailSection/CommonDetailSection'
import Helmet from '../../Components/Helmet/Helmet'

function Detail() {
  
  return (
    <Helmet title={"Detail"}>
        <section className="detail">
            <CommonDetailSection/>
        </section>
    </Helmet>
  )
}

export default Detail