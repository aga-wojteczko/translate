// This is where you could move the fetch funtionality
// Maybe you could consider using react hook for that purpuse
// Read more https://reactjs.org/docs/hooks-custom.html
import React, { useEffect, useState } from 'react';
import { TextInput } from '../components/TextInput';


export default function useTranslation(text,targetLang) => {
    return(
        const [data, setData] = useState(null)
        const [isLoading, setLoading] = useState(false)
        const apiKey = process.env.API_KEY

        useEffect(() => {
            setLoading(true)
            fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${text}&target_lang=${targetLang}`)
              .then((res) => res.json())
              .then((data) => {
                setData(data)
                setLoading(false)
              })
          }, [])

        if (isLoading) return <p>Loading...</p>
         if (!data) return <p>No data</p>

    )
}