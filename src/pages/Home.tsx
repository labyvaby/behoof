import BestChoice from './Home/Sections/BestChoice/BestChoice';
import ProductCardList from './Home/Sections/ProductCardList/ProductCardList';
import Global from './Home/Sections/Global/Global';
import Banner from './Home/Sections/Banner/Banner'; 
import NewProducts from './Home/Sections/NewProducts/NewProducts'; 
import  Reviews  from './Home/Sections/Reviews/Reviews';
export default function Home() {
  return (
    <div>
      <BestChoice />
      <ProductCardList />
      <Global />
      <Banner />   
      <NewProducts  /> 
      <Reviews/>
    </div>
  );
}
