import { useParams } from "react-router-dom";

const MyPage = () => {
  const { name } = useParams();
  return (
    
  <div>Welcome {name} !</div>)
};

export default MyPage;
