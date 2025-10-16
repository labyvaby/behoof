import ArticlePageSection from "./ArticlePage/Sections/ArticlePage/ArticlePage";
import SmartphonePage from "./ArticlePage/Sections/SmartphonePage/SmartphonePage";
 import LendingPrices from "./ArticlePage/Sections/LendingPrices/LendingPrices"; 
const ArticlePage = () => {
  return (
    <div> 
        <ArticlePageSection/> 
        <SmartphonePage/>  
        <LendingPrices/>  
    </div>
  )
}

export default  ArticlePage;