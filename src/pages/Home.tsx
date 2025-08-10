import BestChoice from './Home/Sections/BestChoice/BestChoice'; 
import ProductCardList from './Home/Sections/ProductCardList/ProductCardList';
import Global from './Home/Sections/Global/Global';
export default function Home() {
  return (
    <div>
      <BestChoice /> 
      <ProductCardList/> 
      <Global/>
    </div>
  );
}
