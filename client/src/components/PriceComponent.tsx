import React from "react";
import { useContext } from "react";
import { SPTContext } from "@/components/SellPage";

const PriceComponent = ({symbol}:{symbol:string}) => {
  const { price, setPrice } = useContext(SPTContext);
  let digit : number = 0.0;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let reg = "([0-9]|[1-9][0-9]{1,9})(\.[0-9]+)?|10000000000";
    if(event.target.value.match(reg))
    {
      let n = String(event.target.value).split('.');
      try{
        digit = n[1].length;
      }catch(e){
        digit = 0;
      }
      setPrice(parseFloat(event.target.value).toString());
    }else{
        setPrice("0");
        event.target.value = '';
    }

  }

  return (
    <div className="flex flex-row space-x-4">
      <input onChange={handleChange} type="text" className="w-300  p-2 border rounded bg-pbr-purple text-left" required/><br/>
      <div>
        <i>Commission(10%): {(Number.parseFloat(price)*0.1)} {symbol}</i><br />
        <i>Your Benefit: {(Number.parseFloat(price)*0.9)} {symbol}</i><br />
      </div>
    </div>
  );
}
  
  export default PriceComponent;
