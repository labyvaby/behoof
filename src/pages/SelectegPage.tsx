//import Footer from  './SelectedPage/Sections/PostPage/PostPage'; 
import PostPage from './SelectedPage/Sections/PostPage/PostPage'; 
import RenderSmartphone from './SelectedPage/Sections/RenderSmartphone/RenderSmartphone'; 
import Presentation from './SelectedPage/Sections/Presentation/Presentation'; 
import ProcessorSpec from './SelectedPage/Sections/ProcessorSpec/ProcessorSpec'; 
import CameraAutonomy from './SelectedPage/Sections/CameraAutonomy/CameraAutonomy'; 
import CommentsSection from './SelectedPage/Sections/CommentsSection/CommentsSection';
 const SelectegPage = () => {
  return (
    <><PostPage /><RenderSmartphone /> 
     <Presentation /><ProcessorSpec /> 
     <CameraAutonomy /><CommentsSection/>
     
     </>
  )
}
 

export default SelectegPage;