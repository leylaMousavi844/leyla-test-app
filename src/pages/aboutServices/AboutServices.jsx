
import { useParams } from "react-router-dom";
import { services } from "../../component/services/Services";

function AboutServices() {
  const { id } = useParams();
  const service = services.find((service) => service.id === id);

  return (
    <div>
      
        <div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
    
       
    </div>
  );
}


export default AboutServices;