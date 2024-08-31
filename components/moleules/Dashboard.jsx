// components/organisms/Dashboard.js
import Container from '../atoms/Container';
import Nav from './Nav';

const Dashboard = () => {
  return (
    <Container>
      <div className="flex  ">
        <div className='w-[30%]'><Nav /> </div>
        <div className='w-[90%]'>
          <h1>hello</h1>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
