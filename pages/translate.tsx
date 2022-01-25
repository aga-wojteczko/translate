// import React, { useEffect, useState } from 'react';
// import { TextInput } from '../components/TextInput';
// you could move the fetching functionality to separate custom hook
import { useTranslation } from '../utils/useTranslation';

export default function Translate() {
  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(false)
  
  const text = 'Hello';
  const targetLang = 'PL';
  // const apiKey = process.env.API_KEY;

  // useEffect(() => {
  //   setLoading(true)
  //   fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${text}&target_lang=${targetLang}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No data</p>

  console.log('data:', data)
  return (
    <div>
      <TextInput onChange={() => console.log('on change handler')} />
    </div>
  )
}
   
