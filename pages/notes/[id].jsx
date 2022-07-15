import { useRouter } from 'next/router'
import React from 'react'


const Page = () => {

  const router = useRouter();

  const {params} = router.query

  console.log(params)
  return (
    <div>Note {params}</div>
  )
}

export default Page