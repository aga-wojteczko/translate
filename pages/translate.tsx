import React, { useEffect, useState } from 'react';
import { TextInput } from '../components/TextInput';
// you could move the fetching functionality to separate custom hook
// import { useTranslation } from '../utils/useTranslation';

export default function Translate() {
   const [data, setData] = useState(null) //because I've left the part responsible for the response to the change
  const [isLoading, setLoading] = useState(false)
  
  const text = 'Hello'; //input data, we can change
  const targetLang = 'PL'; //input data, we can change
  // const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    setLoading(true)
    fetch(`https://api-free.deepl.com/v2/translate?auth_key=9dee5181-f767-85aa-06e6-00293e8adde7:fx&text=${text}&target_lang=${targetLang}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  console.log('data:', data)
  return (
    <div>
      <TextInput onChange={() => console.log('on change handler')} />
      <input type="submit" value="Translate"/> 
    </div>
  )
}
   
