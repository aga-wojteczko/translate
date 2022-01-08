export default function Translation(){
    return(
      <div> <input onChange={this.translateText} type="text" placeholder="tłumaczenie" /></div>
      )
   };
   const translateText = () => {
     fetch( "api-free.deepl.com/v2/translate?auth_key=9dee5181-f767-85aa-06e6-00293e8adde7:fx&text=Hello&target_lang=PL")
     .then((response) =>{
       return response.text();
    } )
   }
