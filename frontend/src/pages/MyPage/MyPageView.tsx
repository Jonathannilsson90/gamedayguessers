import { useParams } from "react-router-dom";

const MyPage = () => {
  const { name } = useParams();
  return <div>My page for {name}</div>;
};

export default MyPage;
