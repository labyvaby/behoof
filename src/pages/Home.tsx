import BestChoice from './Home/Sections/BestChoice/BestChoice'; 
import ProductCardList from './Home/Sections/ProductCardList/ProductCardList';
import Global from './Home/Sections/Global/Global'; 
import Purchases from './Home/Sections/Purchases/Purchases';
export default function Home() {
  return (
    <div>
      <BestChoice /> 
      <ProductCardList/> 
      <Global/> 
      <Purchases />
        
    </div>
  );
}
