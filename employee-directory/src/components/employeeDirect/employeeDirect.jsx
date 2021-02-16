import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import EmployeeTable from "../EmployeeTable/EmployeeTable";

function EmployeeDirectory() {
  return (
    <>
      <Hero />
      <Container>
        <EmployeeTable />
      </Container>
    </>
  );
}

export default EmployeeDirect;